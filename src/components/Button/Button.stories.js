import React from 'react';
import { TblButton } from '.';

export default {
  title: 'Components/Button',
  component: TblButton,
  argTypes: {
    size: {
      control: {} 
    },
  },
};

const Template = (args) => <TblButton {...args} />;

export const Solid = Template.bind({});

Solid.args = {
  className: 'solid',
  size: ['large', 'medium', 'small'],
  children: 'Button Label',
  disabled: false
};

export const Outline = Template.bind({});

Outline.args = {
  className: 'outline',
  size: 'large',
  children: 'Button Label',
  disabled: false
};

export const Subtle = Template.bind({});

Subtle.args = {
  className: 'subtle',
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

export const Danger = Template.bind({});

Danger.args = {
  className: 'danger',
  size: 'large',
  children: 'Button Label',
  disabled: false,
  variant: 'contained',
};

export const Inverse = Template.bind({});

Inverse.args = {
  className: 'inverse',
  size: 'large',
  children: 'Button Label',
  disabled: false
};