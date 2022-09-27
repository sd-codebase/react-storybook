import React from 'react';
import { AvatarGroup } from '../components/AvatarGroup/AvatarGroup.component';

import imgSrc from './assets/robot.jpg';

const users = [{imgSrc, name: 'Krishna'}, {imgSrc, name: 'Krishna'}, {imgSrc, name: 'Krishna'}];
const usersText = [{name: 'Krishna'}, {name: 'Krishna'}, {name: 'Krishna'}];

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
};

const Template = (args) => <AvatarGroup {...args} />;

export const LargePurple = Template.bind({});
LargePurple.args = {
  users,
  size: 'large',
  variant: 'purple'
};

export const LargeGray = Template.bind({});
LargeGray.args = {
  users,
  size: 'large',
  variant: 'gray'
};

export const LargeDark = Template.bind({});
LargeDark.args = {
  users,
  size: 'large',
  variant: 'dark'
};

export const LargePurpleText = Template.bind({});
LargePurpleText.args = {
  users: usersText,
  size: 'large',
  variant: 'purple'
};

export const LargeGrayText = Template.bind({});
LargeGrayText.args = {
  users: usersText,
  size: 'large',
  variant: 'gray'
};

export const LargeDarkText = Template.bind({});
LargeDarkText.args = {
  users: usersText,
  size: 'large',
  variant: 'dark'
};
