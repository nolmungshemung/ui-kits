import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Text from './Text';

export default {
  title: 'atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<any> = (args) => (
  <Text {...args}>{args.children}</Text>
);

export const Default = Template.bind({});
Default.args = { children: 'test' };

export const Korean = Template.bind({});
Korean.args = { children: '테스트' };
