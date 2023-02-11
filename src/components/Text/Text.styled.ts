import styled from '@emotion/styled';
import { ColorVariant, EmphasizeVariant, TextVariant, Theme } from '@/theme';
import type { TextStyledProps } from './Text.types';

const generateColor = ({
  theme,
  color,
}: {
  theme: Theme;
  color: TextStyledProps['color'];
}) => {
  const [colorType, textEmphasize] = color.split('.');
  if (!textEmphasize) return theme.colors[color as ColorVariant].default;
  return theme.colors.text[colorType as TextVariant][
    textEmphasize as EmphasizeVariant
  ];
};

export const StyledText = styled.p<TextStyledProps>`
  /* Sets fontWeight, fontSize, lineHeight and letterSpacing */
  ${({ theme, variant }) => ({ ...theme.typography[variant] })}

  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${generateColor};
  text-align: ${({ align }) => align};
`;
