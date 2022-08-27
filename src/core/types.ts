import { Block } from './block';


export type RouteProps = {
  rootQuery: string;
}

export type BlockInheritor = new (propsObj: Props | undefined, rootId: string) => InstanceType<typeof Block>;

type ElementEvent = {
  id: string;
  fn: (event: Event) => void;
};

export type AnyFunc = (...args: unknown[]) => unknown | void;
export type Events = Record<string, ElementEvent[]>;
export type Children = Record<string, InstanceType<typeof Block>>;

export type Props = {
  [key: string]: unknown;
  events?: Events;
  children?: Children;
};

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
