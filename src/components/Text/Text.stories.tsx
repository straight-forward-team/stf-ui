import { Meta, Story } from '@storybook/react';
import { DATA_DISPLAY } from '@/constants/categories';
import Text from './Text';
import type { TextProps } from './Text.types';

export default {
  title: `${DATA_DISPLAY}/Text`,
  component: Text,
  argTypes: {},
} as Meta<typeof Text>;

const Template: Story<TextProps> = function Template(args) {
  return <Text {...args} />;
};

export const Body1 = Template.bind({});
Body1.args = {
  children: 'یک متن نمونه',
  variant: 'body1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'متن با تگ دلخواه',
  variant: 'headline2',
};

export const Overline = Template.bind({});
Overline.args = {
  children: 'متن با تگ مشخص',
  variant: 'overline',
};

export const PreferredTag = Template.bind({});
PreferredTag.args = {
  children: 'متن با هر تگ دلخواه',
  component: 'section',
};
