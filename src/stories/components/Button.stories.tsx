import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DefaultButton from '../../components/buttons/DefaultButton';

export default {
  title: 'Test/Button',
  component: DefaultButton,
} as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton {...args}>{'TEST'}</DefaultButton>
);

export const Default = Template.bind({});
Default.args = {};
