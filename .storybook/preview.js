import { OVERVIEW } from '@/constants/categories';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // Adding `Description` and `Default` to Controls panel of Canvas Tab
    expanded: true,
  },
  backgrounds: {
    disable: true,
  },
  options: {
    storySort: {
      order: [
        OVERVIEW,
        [
          'Introduction',
          'Installation',
          'Custom Styling',
          'Fonts',
          'Contribution',
          'Changelog',
        ],
      ],
    },
  },
  viewport: {
    defaultViewport: 'mobile2',
  },
};
