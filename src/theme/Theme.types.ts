import { BorderRadiuses } from './BorderRadiuses';
import { Colors } from './Colors';
import { Elevation } from './Elevation';
import { SpacingTypes } from './Spacing';
import { Typography } from './Typography';
import { ZIndices } from './ZIndices';

export type Directions = 'rtl' | 'ltr';
export type ThemeMode = 'light' | 'dark';
export type Locales = 'fa-IR' | 'en-GB' | string;
interface BaseTheme {
  // everything that doesn't related to ThemeMode should be written here
  spacing: SpacingTypes;
  zIndices: ZIndices;
  borderRadiuses: BorderRadiuses;
  locale: Locales;
}

export type Theme = BaseTheme & {
  colors: Colors;
  elevation: Elevation;
  typography: Typography;
  mode: ThemeMode;
};

export interface PresetTheme extends BaseTheme {
  colors: Record<ThemeMode, Colors>;
  elevation: Record<ThemeMode, Elevation>;
  typography: Record<Locales, Typography>;
}
