// import type { StorybookConfig } from '@storybook/nextjs';
import type { StorybookConfig} from '@storybook/react-vite';


import path, { resolve } from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
const config: StorybookConfig= {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // {name: '@storybook/addon-styling',
    // options: {
    //   // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
    //   // For more details on this addon's options.
    //   postCss: true
    // }
  // }
  ],
  core: {
    builder: '@storybook/builder-vite' 
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // webpackFinal: (config:any) => {
  //   config.resolve.plugins = config.resolve.plugins || [];
   
  //   config.resolve.plugins.push(new TsconfigPathsPlugin({
  //     configFile: path.resolve(__dirname, '../tsconfig.json')
  //   }));
  //   return config;
  // },
  viteFinal(config:any, { configType }) {
    // customize the Vite config here
    Object.assign(config.resolve.alias, {
      '@': resolve('src'),
      '@static': resolve('src/static'),
      '@components': resolve('src/components'),
      '@containers': resolve('src/containers'),
      '@pages': resolve('src/pages'),
      '@web3': resolve('src/web3'),
      '@reducers': resolve('src/store/reducers'),
      '@selectors': resolve('src/store/selectors'),
      '@sagas': resolve('src/store/sagas'),
      '@consts': resolve('src/store/consts'),
      '@store': resolve('src/store')
    })
    config.define = { 'process.env.NODE_DEBUG': 'false' }
    // return the customized config
    return config
  }
};
export default config;
