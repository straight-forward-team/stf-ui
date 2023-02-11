import { Locales } from '@/theme/Theme.types';
import type { Typography, TypographyVariant } from './Typography.types';

export const typography: Record<Locales, Typography> = {
  'fa-IR': {
    direction: 'rtl',
    fontFamily: 'IRANSansX',
    headline1: {
      fontWeight: 300,
      fontSize: '5.5625rem',
      lineHeight: '7rem',
      letterSpacing: '-0.015em',
    },
    headline2: {
      fontWeight: 300,
      fontSize: '3.625rem',
      lineHeight: '4.5rem',
      letterSpacing: '-0.005em',
    },
    headline3: {
      fontWeight: 400,
      fontSize: '2.9375rem',
      lineHeight: '3.5rem',
      letterSpacing: '0em',
    },
    headline4: {
      fontWeight: 400,
      fontSize: '2.0625rem',
      lineHeight: '2.25rem',
      letterSpacing: '0.001em',
    },
    headline5: {
      fontWeight: 400,
      fontSize: '1.4375rem',
      lineHeight: '1.5rem',
      letterSpacing: '0em',
    },
    headline6: {
      fontWeight: 500,
      fontSize: '1.1875rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.015em',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0em',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      letterSpacing: '-0.005em',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0em',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      letterSpacing: '0em',
    },
    body3: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: '0em',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1rem',
      letterSpacing: '0em',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '-0.004em',
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.625rem',
      lineHeight: '0.75rem',
      letterSpacing: '0em',
    },
    miniBadge: {
      fontWeight: 500,
      fontSize: '0.5625rem',
      lineHeight: '0.75rem',
      letterSpacing: '0em',
    },
  },
  'en-GB': {
    direction: 'ltr',
    fontFamily: 'Inter',
    headline1: {
      fontWeight: 300,
      fontSize: '5.8125rem',
      lineHeight: '7rem',
      letterSpacing: '-0.015em',
    },
    headline2: {
      fontWeight: 300,
      fontSize: '3.625rem',
      lineHeight: '4.5rem',
      letterSpacing: '-0.005em',
    },
    headline3: {
      fontWeight: 400,
      fontSize: '2.9375rem',
      lineHeight: '3.5rem',
      letterSpacing: '0em',
    },
    headline4: {
      fontWeight: 400,
      fontSize: '2.0625rem',
      lineHeight: '2.25rem',
      letterSpacing: '0.0025em',
    },
    headline5: {
      fontWeight: 400,
      fontSize: '1.4375rem',
      lineHeight: '1.5rem',
      letterSpacing: '0em',
    },
    headline6: {
      fontWeight: 500,
      fontSize: '1.1875rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.0015em',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.0015em',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.001em',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.005em',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.0025em',
    },
    body3: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.025em',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1rem',
      letterSpacing: '0.0025em',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.004em',
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.625rem',
      lineHeight: '0.75rem',
      letterSpacing: '0.004em',
    },
    miniBadge: {
      fontWeight: 500,
      fontSize: '0.5625rem',
      lineHeight: '0.75rem',
      letterSpacing: '0em',
    },
  },
};

export type { Typography, TypographyVariant };
