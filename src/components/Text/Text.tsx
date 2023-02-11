import React from 'react';
import { TypographyVariant } from '@/theme';
import { StyledText } from './Text.styled';
import type { TextProps } from './Text.types';

export const mapVariantToHTMLTag: Record<TypographyVariant, React.ElementType> =
  {
    headline1: 'h1',
    headline2: 'h2',
    headline3: 'h3',
    headline4: 'h4',
    headline5: 'h5',
    headline6: 'h6',
    subtitle1: 'p',
    subtitle2: 'p',
    body1: 'p',
    body2: 'p',
    body3: 'p',
    button: 'span',
    caption: 'p',
    overline: 's',
    miniBadge: 'span',
  };

const Text = ({
  variant = 'body1',
  color = 'surface.high',
  align = 'inherit',
  children,
  component,
  ...props
}: TextProps) => (
  <StyledText
    as={component || mapVariantToHTMLTag[variant]}
    align={align}
    variant={variant}
    color={color}
    {...props}
  >
    {children}
  </StyledText>
);

export default Text;
