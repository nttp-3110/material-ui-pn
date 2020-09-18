import React from 'react';

import { PnTextInput, PnNumberInput} from '.';

export default {
  title: 'Components/TextField',
  component: PnTextInput,
  argTypes: {

  },
};

const PnTextInputTemplate = (args) => <PnTextInput {...args} />;
const PnNumberInputTemplate = (args) => <PnNumberInput {...args} />;

export const TextInput = PnTextInputTemplate.bind({});
TextInput.args = {
  label: 'Input',
  defaultValue: 'Default',
  autoSave: true,
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

export const NumberInput = PnNumberInputTemplate.bind({});
NumberInput.args = {
  required: false,
  label: 'number input',
  placeholder: '0.00',
  autoSave: true,
  defaultValue: '',

  onChange: undefined,
  onSave: undefined,
  onAbort: undefined,

  errorMessage: '',
  error: false,
  className: '',
  decimal: 2,
  min: -100,
  max: 10000
};