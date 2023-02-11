import { CSSProperties } from 'react';
import { CSSObject } from '@emotion/react';
import { Theme } from '@/theme';
import type { SizeVariant } from '@/theme/Spacing';

/**
 * y: in y axis direction
 * x: in x axis direction
 * t: top
 * b: bottom
 * l: left
 * r: right
 * s: start
 * e: end
 */
type SpacingDirection = 'y' | 'x' | 't' | 'b' | 'l' | 'r' | 's' | 'e';

/**
 * p: padding
 * m: margin
 */
type SpacingSystemPropsKey =
  | 'p'
  | 'm'
  | `m${SpacingDirection}`
  | `p${SpacingDirection}`;

export type SystemPropsKey =
  | SpacingSystemPropsKey
  | 'position'
  | 'borderRadius';

type SpacingSystemProps = Record<SpacingSystemPropsKey, SizeVariant>;

type PositionSystemProps = {
  position: 'absolute' | 'relative' | 'fixed' | 'sticky';
};

type BorderRadiusSystemProps = {
  borderRadius: SizeVariant;
};

export type SystemProps = SpacingSystemProps &
  BorderRadiusSystemProps &
  PositionSystemProps;

export type Sx = CSSObject | ((theme: Theme) => CSSObject);

export type DefaultProps = {
  className?: string;
  style?: CSSProperties;
  sx?: Sx | Sx[];
};

export type DefaultLayoutProps = Partial<SystemProps> & DefaultProps;
