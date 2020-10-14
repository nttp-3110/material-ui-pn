import React from 'react';
import TblButton from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/TblButton',
  component: TblButton,
  decorators: [withKnobs],
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

const ButtonTemplate = (args) => <TblButton {...args} />;

export const Solid = ButtonTemplate.bind({});

Solid.args = {
  type: 'solid',
  label: 'Button Label'
};