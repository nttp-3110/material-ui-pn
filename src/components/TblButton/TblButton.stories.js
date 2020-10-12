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

const Template = (args) => <ThemeContainer><TblButton {...args} /></ThemeContainer>;

export const Solid = Template.bind({});

Solid.args = {
  type: 'solid',
  label: 'Button Label'
};