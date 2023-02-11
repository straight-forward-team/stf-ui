import '@emotion/react';
import type { Theme as MyTheme } from './Theme.types';

declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends MyTheme {}
}
