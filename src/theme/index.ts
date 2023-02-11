import { borderRadiuses } from './BorderRadiuses';
import { darkColors, lightColors } from './Colors';
import type { ColorVariant, EmphasizeVariant, TextVariant } from './Colors';
import { darkElevation, lightElevation } from './Elevation';
import { spacing } from './Spacing';
import type { Directions, PresetTheme, Theme, ThemeMode } from './Theme.types';
import { Locales } from './Theme.types';
import { typography } from './Typography';
import type { Typography, TypographyVariant } from './Typography';
import { zIndices } from './ZIndices';

export const presetTheme: PresetTheme = {
  spacing,
  typography,
  locale: 'fa-IR',
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  elevation: {
    light: lightElevation,
    dark: darkElevation,
  },
  zIndices,
  borderRadiuses,
};

export type {
  PresetTheme,
  Theme,
  ThemeMode,
  TypographyVariant,
  Directions,
  Typography,
  ColorVariant,
  EmphasizeVariant,
  TextVariant,
  Locales,
};
