import React from 'react';

import { TextField } from './';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'TextField',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'TextField',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'TextField',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'TextField',
};
