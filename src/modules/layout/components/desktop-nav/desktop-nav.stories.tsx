import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DesktopNav as DesktopNav_ } from '.';
import { Transition } from '@mantine/core';
import { NextRouter } from 'next/router';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Desktop Navigation',
  component: DesktopNav_,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof DesktopNav>;
const Template: ComponentStory<typeof DesktopNav> = (args) => <DesktopNav />;
const WithTransitionTemplate: ComponentStory<typeof WithTransition_> = (
  args
) => <WithTransition_ {...args} />;
export const WithTransition = WithTransitionTemplate.bind({});
WithTransition.args = {
  open: true,
};

export const FixPosition = Template.bind({});
function DesktopNav() {
  return (
    <>
      <div className="fixed w-full top-0">
        <DesktopNav_ onLogoClick={() => null} shouldPricingHidden={false} />
      </div>
      <div className="mt-32">
        {Array.from(Array(5)).map((_, index) => (
          <CardDummy key={index} />
        ))}
      </div>
    </>
  );
}

function WithTransition_({ open }: { open: boolean }) {
  return (
    <Transition
      mounted={open}
      transition="slide-down"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => (
        <div style={styles}>
          <DesktopNav_ onLogoClick={() => null} shouldPricingHidden={false} />
        </div>
      )}
    </Transition>
  );
}
function CardDummy() {
  return <div className="w-[500px] h-[500px] border-solid">hello</div>;
}
