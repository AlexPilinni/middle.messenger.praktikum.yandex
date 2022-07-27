import { Block } from './block';

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
