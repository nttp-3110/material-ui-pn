import React from 'react';

import { PnTextField } from './';

export default {
  title: 'Components/TextField',
  component: PnTextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PnTextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'PnTextField',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'PnTextField',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'PnTextField',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'PnTextField',
};
