import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Box from './Box';

export default {
  title: 'Atoms/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<any> = (args) => (
  <Box {...args}>{'Box Component'}</Box>
);

export const Default = Template.bind({});
Default.args = {};
