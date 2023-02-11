import { Directions } from '@/theme';

export interface GlobalStylesProps {
  direction: Directions;
}

export type GlobalStylesStyledProps = Required<GlobalStylesProps>;
