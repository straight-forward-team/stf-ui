import { ComponentPropsWithRef, ElementType } from 'react';
import type { Theme } from '@/theme';

// eslint-disable-next-line @typescript-eslint/ban-types
export type EmptyIntersectionObject = {};

export type OverrideProps<
  T extends ElementType,
  P = EmptyIntersectionObject,
> = Omit<ComponentPropsWithRef<T>, keyof P> & P;

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredBy<T, K extends keyof T> = Required<Pick<T, K>>;
export type WithTheme<K = EmptyIntersectionObject> = { theme: Theme } & K;
