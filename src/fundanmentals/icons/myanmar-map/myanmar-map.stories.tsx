import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyanmarMap as _MyanmarMap } from './myanmar-map';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'fundanmentals/MyanmarMap',
  component: MyanmarMap,
} as ComponentMeta<typeof MyanmarMap>;
export const Template: ComponentStory<typeof MyanmarMap> = (args) => (
  <MyanmarMap />
);

function MyanmarMap() {
  return (
    <div className="flex max-w-full">
      <_MyanmarMap width="700" height="700" fill="#000000" className="flex " />
    </div>
  );
}
