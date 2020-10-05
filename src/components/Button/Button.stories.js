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
  children: 'Button Label',
  disabled: false
};

export const Outline = Template.bind({});

Outline.args = {
  size: 'large',
  variant: 'outlined',
  children: 'Button Label',
  disabled: false
};

export const Subtle = Template.bind({});

Subtle.args = {
  size: 'large',
  children: 'Button Label',
  disabled: false
};

export const Ghost = Template.bind({});

Ghost.args = {
  className: 'ghost',
  size: 'large',
  children: 'Button Label',
  disabled: false
};