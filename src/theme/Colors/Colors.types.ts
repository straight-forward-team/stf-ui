type ShadeVariant = 'hover' | 'focus' | 'pressed' | 'selected';

type LayeredColor = {
  readonly overlay: string;
  readonly opacity: string;
};

export type StatesColor = Record<ShadeVariant, LayeredColor> & {
  readonly default: string;
};

export type Shades = StatesColor & {
  transparent: LayeredColor;
};

export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'caution'
  | 'warning';

// Text color
export type TextVariant = 'surface' | 'color';
export type EmphasizeVariant = 'high' | 'medium' | 'disabled';
type TextEmphasize = Record<EmphasizeVariant, string> & {
  readonly default: string;
};
type TextColor = Record<TextVariant, TextEmphasize>;

// Outline color
export type OutlineVariant = 'thin' | 'thick';
type OutlineColor = Record<OutlineVariant, string>;

// Loading color
type LoadingColor = {
  baseColor: string;
  highlightColor: string;
  gradientColor: string;
};

export type MainColors = 'primary' | 'secondary';

export type Colors = Record<Extract<ColorVariant, MainColors>, Shades> &
  Record<
    Exclude<ColorVariant, MainColors>,
    Pick<Shades, 'default' | 'transparent' | 'hover' | 'focus'>
  > & {
    outline: OutlineColor;
    text: TextColor;
    loading: LoadingColor;
    surface: string;
    black: StatesColor;
    white: StatesColor;
  };
