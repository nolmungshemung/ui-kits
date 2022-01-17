import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import AppBar from './AppBar';

export default {
  title: 'Atoms/AppBar',
  component: AppBar,
  argTypes: {
    sticky: {
      options: [true, false],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<any> = (args) => (
  <AppBar {...args}>{'AppBar'}</AppBar>
);

export const DefaultAppBar = Template.bind({});
DefaultAppBar.args = {
  sticky: false,
};

export const StickyAppBar = Template.bind({});
StickyAppBar.args = {
  sticky: true,
};
