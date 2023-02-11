export const SIZE_VARIANTS = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
] as const;
export const NEGATIVE_SIZE_VARIANTS = SIZE_VARIANTS.map(
  (variant) => `-${variant}`,
);

export type SizeVariant = (typeof SIZE_VARIANTS)[number];
export type NegativeSizeVariant = (typeof NEGATIVE_SIZE_VARIANTS)[number];

export type SizeTypes = Record<SizeVariant, string>;

export type BreakpointVariant = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type BreakpointTypes = Record<BreakpointVariant, string>;

export type SpacingTypes = {
  sizes: SizeTypes;
  breakpoints: BreakpointTypes;
};
