import { EventBus } from './event-bus';
import {cloneDeep, isDeepEqual} from "../utils";
import store from "../store/store";
import {Events, EventsEnum, Meta, Props, StoreEvent} from './types';
import {toKebab} from "../utils";


export class Block<T extends Props> {

   eventBus: EventBus;
   readonly _meta: Meta;
   _element: HTMLElement;
   name: string;
   tagName: string;
   props: T | object;

   _storeEvents: StoreEvent[] = [];

  constructor(tagName = 'div', name: string, props: T, events: Events = {}, rootId?: string) {
    this.eventBus = new EventBus();
    this.name = name;
    this.tagName = tagName

    this._meta = {
      tagName,
      props,
      events,
      rootId
    };
    this.props = this._makePropsProxy(props);
    this._registerEventBusEvents(this.eventBus);
    this.eventBus.emit(EventsEnum.INIT);
  }

   init() {
    this._createResources();
    this._addComponentNameAttribute();
    this._addComponentNameClass();
    this.eventBus.emit(EventsEnum.FLOW_CDM);
  }

   componentDidMount(): void {
    // Может переопределять пользователь, необязательно трогать
  }

   componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return isDeepEqual(oldProps, newProps);
  }

   setProps<T>(nextProps: T): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

   render(): DocumentFragment {
    throw new Error('The render method must be implemented');
  }

   subscribeToStoreEvent(eventName: string, callback: (path: string) => void): void {
    store.on(eventName, callback, this);
    this._storeEvents.push({eventName, callback});
  }
   makePropsProxy(_: T): T | null {
    return null;
  }

   getContent(): HTMLElement {
    return this.element;
  }

   show(): void {
    this.getContent().classList.remove('hidden');
  }

   hide(): void {
    this.getContent().classList.add('hidden');
  }

   destroy(): void {
    this._componentWillUnmount();
  }

   get element(): HTMLElement {
    return this._element;
  }

   _registerEventBusEvents(eventBus: EventBus) {
    eventBus.on(EventsEnum.INIT, this.init.bind(this), this);
    eventBus.on(EventsEnum.FLOW_CDM, this._componentDidMount.bind(this), this);
    eventBus.on(EventsEnum.FLOW_CDU, this._componentDidUpdate.bind(this), this);
    eventBus.on(EventsEnum.FLOW_RENDER, this._render.bind(this), this);
  }

   _removeEventBusEvents() {
    this.eventBus.off(EventsEnum.INIT, this.init.bind(this), this);
    this.eventBus.off(EventsEnum.FLOW_CDM, this._componentDidMount.bind(this), this);
    this.eventBus.off(EventsEnum.FLOW_CDU, this._componentDidUpdate.bind(this), this);
    this.eventBus.off(EventsEnum.FLOW_RENDER, this._render.bind(this), this);
  }

   _createResources() {
    const {tagName} = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

   _addComponentNameAttribute() {
    this._element.setAttribute('data-component', this.name);
  }

   _addComponentNameClass() {
    this._element.classList.add(toKebab(this.name));
  }

   _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(EventsEnum.FLOW_RENDER);
  }

   _componentWillUnmount() {
    this._removeAllEvents();
    const root = document.getElementById(this._meta.rootId || '');

    if (root) {
      root.innerHTML = '';
    }
  }

   _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const isEqual = this.componentDidUpdate(oldProps, newProps);

    if (!isEqual) {
      this.eventBus.emit(EventsEnum.FLOW_RENDER);
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

        const targetCopy = cloneDeep(target);
        target[prop] = value;

        this.eventBus.emit(EventsEnum.FLOW_CDU, targetCopy, target);

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
    const {events = {}} = this._meta;
    Object.entries(events).forEach(([eventName, eventArray = []]) => {
      eventArray.forEach(({id, fn}) => {
        const nodeElement = this.element.querySelector(`#${id}`);

        if (!nodeElement) {
          return;
        }

        nodeElement.addEventListener(eventName, fn);
      });
    });
  }

  protected _removeEvents() {
    const {events = {}} = this._meta;

    Object.entries(events).forEach(([eventName, eventArray = []]) => {
      eventArray.forEach(({id, fn}) => {
        const nodeElement = this.element.querySelector(`#${id}`);

        if (nodeElement) {
          nodeElement.removeEventListener(eventName, fn);
        }
      });
    });
  }

  protected _removeStoreEvents() {
    this._storeEvents.forEach(({eventName, callback}) => {
      store.off(eventName, callback, this);
    });
  }

  protected _removeAllEvents(): void {
    this._removeEventBusEvents();
    this._removeEvents();
    this._removeStoreEvents();
  }
}

