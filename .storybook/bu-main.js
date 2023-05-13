const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', {
    name: '@storybook/addon-styling',
    options: {
      // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
      // For more details on this addon's options.
      postCss: true
    }
  }
  // {
  //   /**
  //    * Fix Storybook issue with PostCSS@8
  //    * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
  //    */
  //   name: '@storybook/addon-postcss',
  //   options: {
  //     postcssLoaderOptions: {
  //       implementation: require('postcss'),
  //     },
  //   },
  // },
  ],

  typescript: {
    reactDocgen: 'react-docgen' // 👈 react-docgen configured here.
  },

  features: {
    storyStoreV7: false
  },
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        name: '@storybook/builder-webpack5',
        options: {
          fsCache: true,
          lazyCompilation: true,
        },
      },
    }
  },
  webpackFinal: config => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json')
    }));
    return config;
  },
  // docs: {
  //   autodocs: true
  // }
};