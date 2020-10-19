import React from 'react';

import TblButton from '.';
import ThemeContainer from './ThemeContainer';

export default {
  title: 'Components/TblButton',
  component: TblButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'normal', 'small']
      }
    }
  },
  args: {
    size: 'normal'
  }
};

const ButtonTemplate = (args) => <ThemeContainer><TblButton {...args} /> </ThemeContainer>;

export const Solid = ButtonTemplate.bind({});

Solid.args = {
  type: 'solid',
  label: 'Button Label'
};

export const Outline = ButtonTemplate.bind({});

Outline.args = {
  type: 'outline',
  label: 'Button Label'
};

export const Subtle = ButtonTemplate.bind({});

Subtle.args = {
  type: 'subtle',
  label: 'Button Label'
};

export const Ghost = ButtonTemplate.bind({});

Ghost.args = {
  type: 'ghost',
  label: 'Button Label'
};

export const Danger = ButtonTemplate.bind({});

Danger.args = {
  type: 'danger',
  label: 'Button Label'
};

export const Inverse = ButtonTemplate.bind({});

Inverse.args = {
  type: 'inverse',
  label: 'Button Label'
};