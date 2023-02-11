import React, { ReactNode } from 'react';
import {
  ColorVariant,
  EmphasizeVariant,
  TextVariant,
  TypographyVariant,
} from '@/theme';
import { OverrideProps, PartialBy } from '@/types';

export type TextColor = `${TextVariant}.${EmphasizeVariant}`;
type TextAlign =
  | 'left'
  | 'right'
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'center'
  | 'end'
  | 'start'
  | 'justify'
  | 'match-parent';

export interface TextBaseProps {
  children?: ReactNode;
  variant: TypographyVariant;
  color: ColorVariant | TextColor;
  align: TextAlign;
  component?: React.ElementType;
  id?: HTMLElement['id'];
}

export type TextStyledProps = TextBaseProps;

export type TextProps = PartialBy<
  // TODO: use dynamic html tag instead of hard-coded `p`.
  OverrideProps<'p', TextBaseProps>,
  'variant' | 'color' | 'align'
>;
