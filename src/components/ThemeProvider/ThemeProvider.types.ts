import { ReactNode } from 'react';
import { Directions, PresetTheme, Theme, ThemeMode, Typography } from '@/theme';
import { Locales } from '@/theme/Theme.types';

type PartialPick<T extends keyof Theme, P extends keyof Theme[T]> = Partial<
  Pick<Theme[T], P>
>;

export type StrictTheme = Partial<
  Omit<PresetTheme, 'colors' | 'typography' | 'direction'>
> & {
  colors?: Partial<
    Record<ThemeMode, PartialPick<'colors', 'primary' | 'secondary'>>
  >;
  typography?: Partial<Record<Directions, Partial<Typography>>>;
};

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: StrictTheme;
  mode?: ThemeMode;
  withModernNormalizeCSS?: boolean;
  locale?: Locales;
}
