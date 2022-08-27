import { EventBus } from './event-bus';
import { Props } from './types';
import {toKebab} from "../utils";

type Meta = {
  tagName: string;
  props: Props;
  rootId: string;
};

export enum EventsEnum {
	INIT = 'init',
	FLOW_CDM = 'flow:component-did-mount',
	FLOW_CDU = 'flow:component-did-update',
	FLOW_RENDER = 'flow:render',
}

export class Block<T extends Props> {


  protected eventBus: EventBus;

  protected readonly _meta: Meta;
  protected _element: HTMLElement;
  protected name: string;
  protected tagName: string;
  protected props: T;

  constructor(tagName = 'div', name: string, props: T, rootId = 'app') {
    this.eventBus = new EventBus();
    this.name = name;
    this.tagName = tagName

    this._meta = {
      tagName,
      props,
      rootId
    };
    this.props = this._makePropsProxy(props);
    this._registerEventBusEvents(this.eventBus);
    this.eventBus.emit(EventsEnum.INIT);
  }

  protected init() {
    this._createResources();
    this._addComponentNameAttribute();
    this._addComponentNameClass();
    this.eventBus.emit(EventsEnum.FLOW_CDM);
  }

  protected componentDidMount(): void {
    // Может переопределять пользователь, необязательно трогать
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return oldProps !== newProps;
  }

  protected setProps<T>(nextProps: T): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  protected render(): DocumentFragment {
    throw new Error('The render method must be implemented');
  }

  protected makePropsProxy(_: T): T | null {
    return null;
  }

  public getContent(): HTMLElement {
    return this.element;
  }

  public show(): void {
    this.getContent().classList.remove('hidden');
  }

  public hide(): void {
    this.getContent().classList.add('hidden');
  }

  destroy(): void {
    this._componentWillUnmount();
  }

  protected get element(): HTMLElement {
    return this._element;
  }

  _registerEventBusEvents(eventBus: EventBus) {
    eventBus.on(EventsEnum.INIT, this.init.bind(this));
    eventBus.on(EventsEnum.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EventsEnum.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EventsEnum.FLOW_RENDER, this._render.bind(this));
  }

  _removeEventBusEvents() {
    this.eventBus.off(EventsEnum.INIT, this.init.bind(this));
    this.eventBus.off(EventsEnum.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.off(EventsEnum.FLOW_CDU, this._componentDidUpdate.bind(this));
    this.eventBus.off(EventsEnum.FLOW_RENDER, this._render.bind(this));
  }

  protected _createResources() {
    const {tagName} = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  protected _addComponentNameAttribute() {
    this._element.setAttribute('data-component', this.name);
  }

  protected _addComponentNameClass() {
    this._element.classList.add(toKebab(this.name));
  }

  protected _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(EventsEnum.FLOW_RENDER);
  }

  protected _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(EventsEnum.FLOW_RENDER);
    }
  }
  _componentWillUnmount() {
    this._removeEventBusEvents();
    this._removeEvents();
    const root = document.getElementById(this._meta.rootId);

    if (root) {
      root.innerHTML = '';
    }
  }
  protected _render(): void {
    this._removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(this.render());
    this._addEvents();
  }

  protected _makePropsProxy(props: T): T {
    const propsFromCustomMethod = this.makePropsProxy(props);

    if (propsFromCustomMethod) {
      return propsFromCustomMethod;
    }

    return new Proxy<T>(props, {
      get: (target: T, prop: string): unknown => {
        const value = target[prop] as unknown;

        return (typeof value === 'function') ? value.bind(target) : value;
      },
      set: (
        target: Props,
        prop: string,
        value: string | Record<string, unknown>,
      ): boolean => {
        target[prop] = value;

        this.eventBus.emit(EventsEnum.FLOW_CDU, { ...target }, target);

        return true;
      },
      deleteProperty: (target: Props, prop: string): boolean => {
        delete target[prop];
        return true;
      },
    });
  }

  protected _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  protected _addEvents() {
    const { events = {} } = this.props;

    Object.entries(events).forEach(([eventName, eventArray = []]) => {
      eventArray.forEach(({ id, fn }) => {
        const nodeElement = this.element.querySelector(`#${id}`);
        if (!nodeElement) {
          throw new Error(`AddEvents function failed with the element id ${id}`);
        }

        nodeElement.addEventListener(eventName, fn);
      });
    });
  }

  protected _removeEvents() {
    const { events = {} } = this.props;

    Object.entries(events).forEach(([eventName, eventArray = []]) => {
      eventArray.forEach(({ id, fn }) => {
        const nodeElement = this.element.querySelector(`#${id}`);
        if (nodeElement) {
          nodeElement.removeEventListener(eventName, fn);
        }
      });
    });
  }
}

