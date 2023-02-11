import type {
  BreakpointTypes,
  BreakpointVariant,
  NegativeSizeVariant,
  SizeTypes,
  SizeVariant,
  SpacingTypes,
} from './Spacing.types';

export const spacing: SpacingTypes = {
  sizes: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': `1.5rem`,
    '3xl': `2rem`,
    '4xl': `4rem`,
  },
  breakpoints: {
    xl: '1200px',
    lg: '992px',
    md: '768px',
    sm: '480px',
    xs: '0px',
  },
};

export type {
  SpacingTypes,
  SizeVariant,
  NegativeSizeVariant,
  BreakpointTypes,
  BreakpointVariant,
  SizeTypes,
};
