import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Input } from '../../components/atoms';

export default {
  title: 'Test/Input',
} as ComponentMeta<typeof Input.Text>;

const TextTemplate: ComponentStory<any> = (args) => <Input.Text {...args} />;
export const Text = TextTemplate.bind({});
Text.args = {
  placeholder: 'input text',
};

const NumberTemplate: ComponentStory<any> = (args) => (
  <Input.Number {...args} />
);
export const Number = NumberTemplate.bind({});
Number.args = {
  placeholder: 'input only number',
};

const RadioTemplate: ComponentStory<any> = (args) => <Input.Radio {...args} />;
export const Radio = RadioTemplate.bind({});
Radio.args = {};
