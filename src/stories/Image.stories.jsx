import React from 'react';
import { Image } from '../components/Image/Image';
export default {
  title: 'Example/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: 'red',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};
