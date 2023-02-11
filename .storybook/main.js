const path = require('path');
const git = require('git-rev-sync');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/assets': path.resolve(__dirname, '../src/assets'),
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/theme': path.resolve(__dirname, '../src/theme'),
      '@/utility': path.resolve(__dirname, '../src/utility'),
      '@/types': path.resolve(__dirname, '../src/types'),
      '@/constants': path.resolve(__dirname, '../src/constants'),
    };

    return config;
  },
  staticDirs: [{ from: './assets', to: '/assets' }],
  env: (config) => ({
    ...config,
    GIT_BRANCH: git.branch(),
    GIT_TAG: git.tag(),
    GIT_IS_TAG_DIRTY: git.isTagDirty(),
    CI_COMMIT_REF_NAME: process.env.CI_COMMIT_REF_NAME,
  }),
};
