import React from 'react';

import { PnTextField } from './';

export default {
  title: 'Components/TextField',
  component: PnTextField,
  argTypes: {
    
  },
};

const Template = (args) => <PnTextField {...args} />;

export const Input = Template.bind({});
Input.args = {
  label: 'Input',
  defaultValue: 'Default'
};

export const InputSingleSave = Template.bind({});
InputSingleSave.args = {
  label: 'Input Single Save',
  defaultValue: 'Default',
  singleSave: true
};