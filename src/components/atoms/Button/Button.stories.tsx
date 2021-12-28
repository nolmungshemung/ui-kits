import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    color: {
      options: ['white', 'primary'],
      control: { type: 'select' },
    },
    outline: {
      options: ['black', 'gray', 'none'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<any> = (args) => (
  <Button {...args}>{'Button'}</Button>
);

export const WhiteButton = Template.bind({});

export const PrimaryButton = Template.bind({});

WhiteButton.args = {
  size: 'md',
  color: 'white',
  outline: 'black',
};

PrimaryButton.args = {
  size: 'md',
  color: 'primary',
  outline: 'none',
};
