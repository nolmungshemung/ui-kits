import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<any> = (args) => (
  <Button {...args}>{'Button'}</Button>
);

export const Default = Template.bind({});
Default.args = {};
