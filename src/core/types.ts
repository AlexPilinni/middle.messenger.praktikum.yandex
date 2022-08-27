import { Block } from './block';


export type RouteProps = {
  rootQuery: string;
}

export type BlockInheritor = new (propsObj: Props | undefined, events: Events | undefined, rootId?: string) => InstanceType<typeof Block>;

type ElementEvent = {
  id: string;
  fn: (event: Event) => void;
};

export type AnyFunc = (...args: unknown[]) => unknown | void;
export type Events = Record<string, ElementEvent[]>;
export type Children = Record<string, InstanceType<typeof Block>>;
export type Props = Indexed;
// export type Props = {
//   [key: string]: unknown;
//   events?: Events;
//   children?: Children;
// };


export type Meta = {
  tagName: string;
  props: Props;
  rootId?: string;
  events: Events;
};

export enum EventsEnum {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

export type User = {
  id: string,
  name: string,
  time: string,
  message: string,
  counter: string
}

export type Indexed<T = unknown> = {
  [key in string]: T;
};
export type StoreEvent = {
  eventName: string;
  callback: (path: string) => void;
}
