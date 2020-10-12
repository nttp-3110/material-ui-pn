import React from 'react';
import Button from '.';

import ThemeContainer from './ThemeContainer';

export default {
  title: 'Components/TblButton',
  component: Button,
};

const Template = (args) => <ThemeContainer><Button {...args} /></ThemeContainer>;

export const Solid = Template.bind({});

Solid.args = {
  label: 'Button Label'
};