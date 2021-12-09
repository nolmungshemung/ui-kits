import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import InputGroup from '../../components/inputs/InputGroup';

export default {
  title: 'Test/Input',
} as ComponentMeta<typeof InputGroup.Text>;

const TextTemplate: ComponentStory<any> = (args) => (
  <InputGroup.Text {...args} />
);
export const Text = TextTemplate.bind({});
Text.args = {
  placeholder: 'input text',
};

const NumberTemplate: ComponentStory<any> = (args) => (
  <InputGroup.Number {...args} />
);
export const Number = NumberTemplate.bind({});
Number.args = {
  placeholder: 'input only number',
};

const RadioTemplate: ComponentStory<any> = (args) => (
  <InputGroup.Radio {...args} />
);
export const Radio = RadioTemplate.bind({});
Radio.args = {};
