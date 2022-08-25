// import { EventBus } from './event-bus';
// import { Props } from './types';
// import {toKebab} from "../utils";
//
// type Meta = {
//   tagName: string;
//   props: Props;
//   rootId: string;
// };
//
// export enum EventsEnum {
// 	INIT = 'init',
// 	FLOW_CDM = 'flow:component-did-mount',
// 	FLOW_CDU = 'flow:component-did-update',
// 	FLOW_RENDER = 'flow:render',
// }
//
// export class Block<T extends Props> {
//
//
//   protected eventBus: EventBus;
//
//   protected readonly _meta: Meta;
//   protected _element: HTMLElement;
//   protected name: string;
//   protected tagName: string;
//   protected props: T;
//
//   constructor(tagName = 'div', name: string, props: T, rootId = 'app') {
//     this.eventBus = new EventBus();
//     this.name = name;
//     this.tagName = tagName
//     this.props = this._makePropsProxy(props);
//     this._meta = {
//       tagName,
//       props,
//       rootId
//     };
//     this._registerEvents(this.eventBus);
//     this.eventBus.emit(EventsEnum.INIT);
//   }
//
//   protected init() {
//     this._createResources();
//     this._addComponentNameAttribute();
//     this._addComponentNameClass();
//     this.eventBus.emit(EventsEnum.FLOW_CDM);
//   }
//
//   protected componentDidMount(): void {
//     // Может переопределять пользователь, необязательно трогать
//   }
//
//   protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
//     return oldProps !== newProps;
//   }
//
//   protected setProps<T>(nextProps: T): void {
//     if (!nextProps) {
//       return;
//     }
//
//     Object.assign(this.props, nextProps);
//   }
//
//   protected render(): DocumentFragment {
//     throw new Error('The render method must be implemented');
//   }
//
//   protected makePropsProxy(_: T): T | null {
//     return null;
//   }
//
//   protected getContent(): HTMLElement {
//     return this.element;
//   }
//
//   public show(): void {
//     this.getContent().classList.remove('hidden');
//   }
//
//   public hide(): void {
//     this.getContent().classList.add('hidden');
//   }
//
//   protected get element(): HTMLElement {
//     return this._element;
//   }
//
//   protected _registerEvents(eventBus: EventBus) {
//     eventBus.on(EventsEnum.INIT, this.init.bind(this));
//     eventBus.on(EventsEnum.FLOW_CDM, this._componentDidMount.bind(this));
//     eventBus.on(EventsEnum.FLOW_CDU, this._componentDidUpdate.bind(this));
//     eventBus.on(EventsEnum.FLOW_RENDER, this._render.bind(this));
//   }
//
//   protected _createResources() {
//     const {tagName} = this._meta;
//     this._element = this._createDocumentElement(tagName);
//   }
//
//   protected _addComponentNameAttribute() {
//     this._element.setAttribute('data-component', this.name);
//   }
//
//   protected _addComponentNameClass() {
//     this._element.classList.add(toKebab(this.name));
//   }
//
//   protected _componentDidMount() {
//     this.componentDidMount();
//     this.eventBus.emit(EventsEnum.FLOW_RENDER);
//   }
//
//   protected _componentDidUpdate(oldProps: Props, newProps: Props): void {
//     const response = this.componentDidUpdate(oldProps, newProps);
//     if (response) {
//       this.eventBus.emit(EventsEnum.FLOW_RENDER);
//     }
//   }
//
//   protected _render(): void {
//     this._removeEvents();
//     this._element.innerHTML = '';
//     this._element.appendChild(this.render());
//     this._addEvents();
//   }
//
//   protected _makePropsProxy(props: T): T {
//     const propsFromCustomMethod = this.makePropsProxy(props);
//
//     if (propsFromCustomMethod) {
//       return propsFromCustomMethod;
//     }
//
//     return new Proxy<T>(props, {
//       get: (target: T, prop: string): unknown => {
//         const value = target[prop] as unknown;
//
//         return (typeof value === 'function') ? value.bind(target) : value;
//       },
//       set: (
//         target: Props,
//         prop: string,
//         value: string | Record<string, unknown>,
//       ): boolean => {
//         target[prop] = value;
//
//         this.eventBus.emit(EventsEnum.FLOW_CDU, { ...target }, target);
//
//         return true;
//       },
//       deleteProperty: (target: Props, prop: string): boolean => {
//         delete target[prop];
//         return true;
//       },
//     });
//   }
//
//   protected _createDocumentElement(tagName: string): HTMLElement {
//     // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
//     return document.createElement(tagName);
//   }
//
//   protected _addEvents() {
//     const { events = {} } = this.props;
//
//     Object.entries(events).forEach(([eventName, eventArray = []]) => {
//       eventArray.forEach(({ id, fn }) => {
//         const nodeElement = this.element.querySelector(`#${id}`);
//         if (!nodeElement) {
//           throw new Error(`AddEvents function failed with the element id ${id}`);
//         }
//
//         nodeElement.addEventListener(eventName, fn);
//       });
//     });
//   }
//
//   protected _removeEvents() {
//     const { events = {} } = this.props;
//
//     Object.entries(events).forEach(([eventName, eventArray = []]) => {
//       eventArray.forEach(({ id, fn }) => {
//         const nodeElement = this.element.querySelector(`#${id}`);
//         if (nodeElement) {
//           nodeElement.removeEventListener(eventName, fn);
//         }
//       });
//     });
//   }
// }

import {EventBus} from './event-bus';
import {Props} from './types';

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

export class Block<T> {
  props: Props;
  protected eventBus: EventBus;
  private _element: HTMLElement;
  protected readonly _meta: Meta;

  constructor(tagName = 'div', props: Props = {}, rootId = 'app') {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      rootId
    };

    this.props = this._makePropsProxy(props);

    this._registerEvents(this.eventBus);
    this.eventBus.emit(EventsEnum.INIT);
  }

  init() {
    this._createResources();
    this._addComponentNameAttribute();
    this.eventBus.emit(EventsEnum.FLOW_CDM);
  }

  componentDidMount(): void {
    // Может переопределять пользователь, необязательно трогать
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return oldProps !== newProps;
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

  makePropsProxy(_: Props): Props | null {
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

  get element(): HTMLElement {
    return this._element;
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(EventsEnum.INIT, this.init.bind(this));
    eventBus.on(EventsEnum.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EventsEnum.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EventsEnum.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const {tagName} = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _addComponentNameAttribute() {
    this._element.setAttribute('data-component', this.constructor.name);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(EventsEnum.FLOW_RENDER);
  }

  _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(EventsEnum.FLOW_RENDER);
    }
  }

  _render(): void {
    this._removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(this.render());
    this._addEvents();
  }

  _makePropsProxy(props: Props): Props {
    const propsFromCustomMethod = this.makePropsProxy(props);

    if (propsFromCustomMethod) {
      return propsFromCustomMethod;
    }

    return new Proxy<Props>(props, {
      get: (target: Props, prop: string): unknown => {
        const value = target[prop] as unknown;

        return (typeof value === 'function') ? value.bind(target) : value;
      },
      set: (
        target: Props,
        prop: string,
        value: string | Record<string, unknown>,
      ): boolean => {
        target[prop] = value;

        this.eventBus.emit(EventsEnum.FLOW_CDU, {...target}, target);

        return true;
      },
      deleteProperty: (target: Props, prop: string): boolean => {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete target[prop];
        return true;
      },
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  _addEvents() {
    const {events = {}} = this.props;

    Object.entries(events).forEach(([eventName, eventArray = []]) => {
      eventArray.forEach(({id, fn}) => {
        const nodeElement = this.element.querySelector(`#${id}`);
        if (!nodeElement) {
          throw new Error(`AddEvents function failed with the element id ${id}`);
        }

        nodeElement.addEventListener(eventName, fn);
      });
    });
  }

  _removeEvents() {
    const {events = {}} = this.props;

    Object.entries(events).forEach(([eventName, eventArray = []]) => {
      eventArray.forEach(({id, fn}) => {
        const nodeElement = this.element.querySelector(`#${id}`);
        if (nodeElement) {
          nodeElement.removeEventListener(eventName, fn);
        }
      });
    });
  }
}
