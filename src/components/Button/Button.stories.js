import React from 'react';
import {TblButton} from '.';

export default {
  title: 'Components/Button',
  component: TblButton,
};

const Template = (args) => <TblButton {...args} />;

export const Solid = Template.bind({});

Solid.args = {
  size: 'large',
  variant: 'contained',
  children: 'Button',
  disabled: false
};

export const Outline = Template.bind({});

Outline.args = {
  size: 'large',
  variant: 'outlined',
  children: 'Button',
  disabled: false
};

export const Subtle = Template.bind({});

Subtle.args = {
  size: 'large',
  children: 'Button',
  disabled: false
};