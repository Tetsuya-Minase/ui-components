module.exports = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-notes', '@storybook/addon-docs', '@storybook/addon-controls'],
  core: {
    builder: "webpack5"
  }
};
