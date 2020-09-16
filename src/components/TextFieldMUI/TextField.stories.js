import React from 'react';

import { PnTextField } from '.';
import InputAdornment from '@material-ui/core/InputAdornment';

export default {
  title: 'Components/TextFieldMUI',
  component: PnTextField,
  argTypes: {
    
  },
};

const Template = (args) => <PnTextField {...args} />;

export const Input = Template.bind({});
Input.args = {
  label: 'Input',
  defaultValue: 'Default',
  singleSave: false,
  inputProps: { maxLength: 10, minLength: 8 },
  required: true,
  placeholder: 'placeholder',

  onChange: undefined,
  onSave: undefined,
  onAbort: undefined,

  errorMessage: '',
  error: false,
  className: ''
};

export const InputSingleSave = Template.bind({});
InputSingleSave.args = {
  label: 'Input Single Save',
  defaultValue: 'Default',
  singleSave: true,
  inputProps: { maxLength: 10, minLength: 8 },
  required: true,
  placeholder: 'placeholder',

  onChange: undefined,
  onSave: undefined,
  onAbort: undefined,

  errorMessage: '',
  error: false,
  className: ''
};