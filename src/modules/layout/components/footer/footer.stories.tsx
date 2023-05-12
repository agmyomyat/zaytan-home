import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;
export const Default: ComponentStory<typeof Footer> = (args) => <Footer />;
