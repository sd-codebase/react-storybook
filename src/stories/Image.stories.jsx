import React from 'react';
import { Image } from '../components/Image/Image.component';

import imgSrc from './assets/robot.jpg';

export default {
  title: 'Components/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const LargePurple = Template.bind({});
LargePurple.args = {
  imgSrc,
  alt: 'Large purple image',
  size: 'large',
  variant: 'purple'
};

export const LargeGray = Template.bind({});
LargeGray.args = {
  imgSrc,
  alt: 'Large gray image',
  size: 'large',
  variant: 'gray'
};

export const LargeDark = Template.bind({});
LargeDark.args = {
  imgSrc,
  alt: 'Large dark image',
  size: 'large',
  variant: 'dark'
};
