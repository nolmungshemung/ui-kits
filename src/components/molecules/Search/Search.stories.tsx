import { ComponentStory } from '@storybook/react';
import React from 'react';
import Search from './Search';

export default {
  title: 'Atoms/Search',
  component: Search,
} as any;

const Template: ComponentStory<any> = (args) => (
  <Search {...args} placeholder="검색어를 입력해주세요." />
);

export const DefaultSearch = Template.bind({});
DefaultSearch.args = {};
