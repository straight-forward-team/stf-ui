import { mix, transparentize } from '@/utility';
import type { Colors } from './Colors.types';

const overlayColorHex = '#fff';

const lightColors: Colors = {
  primary: {
    default: '#22A958',
    transparent: {
      get overlay() {
        return mix(lightColors.primary.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.primary.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(lightColors.primary.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(lightColors.primary.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(lightColors.primary.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(lightColors.primary.default, 0.12);
      },
    },
    pressed: {
      get overlay() {
        return mix(lightColors.primary.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.primary.default, 0.1);
      },
    },
    selected: {
      get overlay() {
        return mix(lightColors.primary.default, overlayColorHex, 0.08);
      },
      get opacity() {
        return transparentize(lightColors.primary.default, 0.08);
      },
    },
  },
  secondary: {
    default: '#575EFF',
    transparent: {
      get overlay() {
        return mix(lightColors.secondary.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.secondary.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(lightColors.secondary.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(lightColors.secondary.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(lightColors.secondary.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(lightColors.secondary.default, 0.12);
      },
    },
    pressed: {
      get overlay() {
        return mix(lightColors.secondary.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.secondary.default, 0.1);
      },
    },
    selected: {
      get overlay() {
        return mix(lightColors.secondary.default, overlayColorHex, 0.08);
      },
      get opacity() {
        return transparentize(lightColors.secondary.default, 0.08);
      },
    },
  },
  error: {
    default: '#DF1D17',
    transparent: {
      get overlay() {
        return mix(lightColors.error.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.error.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(lightColors.error.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(lightColors.error.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(lightColors.error.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(lightColors.error.default, 0.12);
      },
    },
  },
  caution: {
    default: '#FFC21C',
    transparent: {
      get overlay() {
        return mix(lightColors.caution.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.caution.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(lightColors.caution.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(lightColors.caution.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(lightColors.caution.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(lightColors.caution.default, 0.12);
      },
    },
  },
  warning: {
    default: '#EBA825',
    transparent: {
      get overlay() {
        return mix(lightColors.warning.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.warning.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(lightColors.warning.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(lightColors.warning.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(lightColors.warning.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(lightColors.warning.default, 0.12);
      },
    },
  },
  outline: {
    thin: '#EBECF2',
    thick: '#F8F9FF',
  },
  text: {
    surface: {
      high: '#252A3C',
      medium: '#686C79',
      disabled: 'rgba(37, 42, 60, 0.38)',
      get default() {
        return this.high;
      },
    },
    color: {
      high: '#FFFFFF',
      medium: '#F8F9FF',
      disabled: 'rgba(255, 255, 255, 0.38)',
      get default() {
        return this.high;
      },
    },
  },
  black: {
    default: '#000000',
    hover: {
      get overlay() {
        return mix(lightColors.black.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(lightColors.black.default, 0.04);
      },
    },
    selected: {
      get overlay() {
        return mix(lightColors.black.default, overlayColorHex, 0.08);
      },
      get opacity() {
        return transparentize(lightColors.black.default, 0.08);
      },
    },
    pressed: {
      get overlay() {
        return mix(lightColors.black.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.black.default, 0.1);
      },
    },
    focus: {
      get overlay() {
        return mix(lightColors.black.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(lightColors.black.default, 0.12);
      },
    },
  },
  white: {
    default: '#FFFFFF',
    hover: {
      get overlay() {
        return mix(lightColors.white.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(lightColors.white.default, 0.04);
      },
    },
    selected: {
      get overlay() {
        return mix(lightColors.white.default, overlayColorHex, 0.08);
      },
      get opacity() {
        return transparentize(lightColors.white.default, 0.08);
      },
    },
    pressed: {
      get overlay() {
        return mix(lightColors.white.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(lightColors.white.default, 0.1);
      },
    },
    focus: {
      get overlay() {
        return mix(lightColors.white.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(lightColors.white.default, 0.12);
      },
    },
  },
  surface: '#FFFFFF',
  loading: {
    baseColor: '#EBECF2',
    highlightColor: '#FAFAFA',
    get gradientColor() {
      return `linear-gradient(90deg,${this.baseColor},${this.highlightColor},${this.baseColor});`;
    },
  },
};

const darkColors: Colors = {
  primary: {
    default: '#44D980',
    transparent: {
      get overlay() {
        return mix(darkColors.primary.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.primary.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(darkColors.primary.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(darkColors.primary.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(darkColors.primary.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(darkColors.primary.default, 0.12);
      },
    },
    pressed: {
      get overlay() {
        return mix(darkColors.primary.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.primary.default, 0.1);
      },
    },
    selected: {
      get overlay() {
        return mix(darkColors.primary.default, overlayColorHex, 0.08);
      },
      get opacity() {
        return transparentize(darkColors.primary.default, 0.08);
      },
    },
  },
  secondary: {
    default: '#8589FF',
    transparent: {
      get overlay() {
        return mix(darkColors.secondary.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.secondary.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(darkColors.secondary.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(darkColors.secondary.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(darkColors.secondary.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(darkColors.secondary.default, 0.12);
      },
    },
    pressed: {
      get overlay() {
        return mix(darkColors.secondary.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.secondary.default, 0.1);
      },
    },
    selected: {
      get overlay() {
        return mix(darkColors.secondary.default, overlayColorHex, 0.08);
      },
      get opacity() {
        return transparentize(darkColors.secondary.default, 0.08);
      },
    },
  },
  error: {
    default: '#EC7774',
    transparent: {
      get overlay() {
        return mix(darkColors.error.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.error.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(darkColors.error.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(darkColors.error.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(darkColors.error.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(darkColors.error.default, 0.12);
      },
    },
  },
  caution: {
    default: '#FFC21C',
    transparent: {
      get overlay() {
        return mix(darkColors.caution.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.caution.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(darkColors.caution.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(darkColors.caution.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(darkColors.caution.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(darkColors.caution.default, 0.12);
      },
    },
  },
  warning: {
    default: '#EBA825',
    transparent: {
      get overlay() {
        return mix(darkColors.warning.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.warning.default, 0.1);
      },
    },
    hover: {
      get overlay() {
        return mix(darkColors.warning.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(darkColors.warning.default, 0.04);
      },
    },
    focus: {
      get overlay() {
        return mix(darkColors.warning.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(darkColors.warning.default, 0.12);
      },
    },
  },
  outline: {
    thin: 'rgba(255, 255, 255, 0.12)',
    thick: 'rgba(255, 255, 255, 0.12)',
  },
  text: {
    surface: {
      high: 'rgba(255, 255, 255, 0.87)',
      medium: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      get default() {
        return this.high;
      },
    },
    color: {
      high: '#000000',
      medium: 'rgba(0, 0, 0, 0.74)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      get default() {
        return this.high;
      },
    },
  },
  black: {
    default: '#000000',
    hover: {
      get overlay() {
        return mix(darkColors.black.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(darkColors.black.default, 0.04);
      },
    },
    selected: {
      get overlay() {
        return mix(darkColors.black.default, overlayColorHex, 0.08);
      },
      get opacity() {
        return transparentize(darkColors.black.default, 0.08);
      },
    },
    pressed: {
      get overlay() {
        return mix(darkColors.black.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.black.default, 0.1);
      },
    },
    focus: {
      get overlay() {
        return mix(darkColors.black.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(darkColors.black.default, 0.12);
      },
    },
  },
  white: {
    default: '#FFFFFF',
    hover: {
      get overlay() {
        return mix(darkColors.white.default, overlayColorHex, 0.04);
      },
      get opacity() {
        return transparentize(darkColors.white.default, 0.04);
      },
    },
    selected: {
      get overlay() {
        return mix(darkColors.white.default, overlayColorHex, 0.08);
      },
      get opacity() {
        return transparentize(darkColors.white.default, 0.08);
      },
    },
    pressed: {
      get overlay() {
        return mix(darkColors.white.default, overlayColorHex, 0.1);
      },
      get opacity() {
        return transparentize(darkColors.white.default, 0.1);
      },
    },
    focus: {
      get overlay() {
        return mix(darkColors.white.default, overlayColorHex, 0.12);
      },
      get opacity() {
        return transparentize(darkColors.white.default, 0.12);
      },
    },
  },
  surface: '#000000',
  loading: {
    baseColor: '#474747',
    highlightColor: '#232323',
    get gradientColor() {
      return `linear-gradient(270deg,${this.baseColor},${this.highlightColor},${this.baseColor});`;
    },
  },
};

export { lightColors, darkColors };
export type {
  Colors,
  ColorVariant,
  MainColors,
  EmphasizeVariant,
  TextVariant,
} from './Colors.types';
