import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DemoMenu } from '.';

export default {
  title: 'Layout/Demo Menu',
  component: DemoMenu,
} as ComponentMeta<typeof DemoMenu>;
export const Default: ComponentStory<typeof DemoMenu> = (args) => <DemoMenu />;
