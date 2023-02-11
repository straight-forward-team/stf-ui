import { useMemo } from 'react';
import { ThemeProvider as EmotionThemeProvider, Theme } from '@emotion/react';
import GlobalStyles from '@/components/GlobalStyles';
import { presetTheme } from '@/theme';
import { mergeObjects } from '@/utility';
import type { ThemeProviderProps } from './ThemeProvider.types';

export const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    children,
    theme = {},
    mode = 'light',
    withModernNormalizeCSS = true,
    locale = 'fa-IR',
  } = props;

  const preparedTheme: Theme = useMemo(() => {
    // Merge presetTheme with incoming theme
    const mergedTheme = mergeObjects(presetTheme, { ...theme, locale });

    // Select mode from colors with the rest of values
    return {
      ...mergedTheme,
      colors: mergedTheme.colors[mode],
      elevation: mergedTheme.elevation[mode],
      typography: mergedTheme.typography[locale],
      mode,
    };
  }, [theme, mode, locale]);

  const directionWrapper = preparedTheme.typography.direction;

  return (
    <EmotionThemeProvider theme={preparedTheme}>
      <main dir={directionWrapper}>
        {/* Set Global Styles and FontFaces */}
        {withModernNormalizeCSS && <GlobalStyles />}
        {children}
      </main>
    </EmotionThemeProvider>
  );
};
