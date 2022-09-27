import React from 'react';
import { Avatar } from '../components/Avatar/Avatar.component';

import imgSrc from './assets/robot.jpg';

const avatar = {imgSrc, name: 'Krishna'};
const avatarText = {name: 'Krishna'};

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const LargePurple = Template.bind({});
LargePurple.args = {
  avatar,
  size: 'large',
  variant: 'purple'
};

export const LargeGray = Template.bind({});
LargeGray.args = {
  avatar,
  size: 'large',
  variant: 'gray'
};

export const LargeDark = Template.bind({});
LargeDark.args = {
  avatar,
  size: 'large',
  variant: 'dark'
};

export const LargePurpleText = Template.bind({});
LargePurpleText.args = {
  avatar: avatarText,
  size: 'large',
  variant: 'purple'
};

export const LargeGrayText = Template.bind({});
LargeGrayText.args = {
  avatar: avatarText,
  size: 'large',
  variant: 'gray'
};

export const LargeDarkText = Template.bind({});
LargeDarkText.args = {
  avatar: avatarText,
  size: 'large',
  variant: 'dark'
};
