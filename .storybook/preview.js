import { ThemeProvider } from '@/components/ThemeProvider';
import { OVERVIEW } from '@/constants/categories';

import { typography } from '@/theme/Typography';

const mapLocaleToFlag = {
  'fa-IR': '🇮🇷',
  'en-GB': '🇬🇧',
};

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

export const globalTypes = {
  mode: {
    name: 'Theme Mode',
    description: 'Global theme mode for components',
    defaultValue: 'light',
    toolbar: {
      items: [
        {
          value: 'light',
          icon: 'circlehollow',
          right: '⚪',
          title: 'Light Mode',
        },
        { value: 'dark', icon: 'circle', right: '⚫', title: 'Dark Mode' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
  locale: {
    name: 'Locale',
    description: 'Locale',
    defaultValue: 'fa-IR',
    toolbar: {
      icon: 'paragraph',
      items: Object.keys(typography).map((locale) => {
        return { value: locale, right: mapLocaleToFlag[locale], title: locale };
      }),
      showName: true,
      dynamicTitle: true,
    },
  },
};

const updateDirectionAttribute = (currentDirection) => {
  // Always keep the Docs page as LTR to correctly view English documents
  document.querySelector('#docs-root').dir = 'ltr';

  document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
      // Update direction of each story (in the Docs page that is always LTR) as the direction of emotion's theme
      const docsStories = document.querySelectorAll('.docs-story');
      docsStories.forEach((docsStory) => (docsStory.dir = currentDirection));

      // Update direction of code section as LTR
      const codeSections = document.querySelectorAll('.os-content');
      codeSections.forEach((docsStory) => (docsStory.dir = 'ltr'));
    }
  });
};

const withThemeProvider = (Story, context) => {
  // Set background color based on theme mode
  document.body.style.background =
    context.globals.mode === 'light' ? '#FCFCFC' : '#292929';
  const dir = typography[context.globals.locale].direction;
  updateDirectionAttribute(dir);

  return (
    <ThemeProvider mode={context.globals.mode} locale={context.globals.locale}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
