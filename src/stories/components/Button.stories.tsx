import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '../../components/atoms';

export default {
  title: 'Test/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<any> = (args) => (
  <Button {...args}>{'TEST'}</Button>
);

export const Default = Template.bind({});
Default.args = {};
