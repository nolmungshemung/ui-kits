import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Text from './Text';

export default {
  title: 'atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<any> = (args) => <Text {...args}>{'Text'}</Text>;

export const Default = Template.bind({});
Default.args = {};

export const Size = Template.bind({});
Size.args = { size: 'xl' };

export const Color = Template.bind({});
Color.args = { color: 'gray' };

export const Bold = Template.bind({});
Bold.args = { weight: 'bold' };

export const CustomCSS = Template.bind({});
CustomCSS.args = { css: { color: '#3498db', fontSize: '30px' } };
