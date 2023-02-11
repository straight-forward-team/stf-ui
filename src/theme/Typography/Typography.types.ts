import { Directions } from '@/theme/Theme.types';

export type TypographyVariant =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'button'
  | 'caption'
  | 'overline'
  | 'miniBadge';

/**
 * 300 => light
 * 400 => regular
 * 500 => normal
 */
type FontWeights = 300 | 400 | 500;
type FontSize = `${number}rem`;
type LineHeight = `${number}rem`;
type LetterSpacing = `${number}em`;

type TypographyVariantValue = {
  fontWeight: FontWeights;
  fontSize: FontSize;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
};

export type Typography = Record<TypographyVariant, TypographyVariantValue> & {
  fontFamily: string;
  direction: Directions;
};
