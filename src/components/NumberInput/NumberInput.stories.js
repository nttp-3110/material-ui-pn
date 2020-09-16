import React from 'react';

import { PnNumberInput } from './';

export default {
  title: 'Components/NumberInput',
  component: PnNumberInput,
  argTypes: {

  },
};

const Template = (args) => <PnNumberInput {...args} />;

export const Input = Template.bind({});
Input.args = {
  label: 'Input',
  defaultValue: '',
  autoSave: true,
  max: 100,
  min: -5,
  decimal: 2
};