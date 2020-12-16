import React from 'react';
import ThemeContainer from '../../themes/ThemeContainer';

import { PnTextInput as TextInput } from './text-input';
import { PnTextInput as TextInputSingleSave } from './text-input-single-save';

export default {
  title: 'Components/InputFields',
  component: TextInput,
  argTypes: {

  },
};

const PnTextInputTemplate = (args) => <ThemeContainer><TextInput {...args} /></ThemeContainer>;
const PnTextInputSingleSaveTemplate = (args) => <ThemeContainer><TextInputSingleSave {...args} /></ThemeContainer>;

export const PnTextInput = PnTextInputTemplate.bind({});
PnTextInput.args = {
  label: 'Input',
  defaultValue: 'Default',
  autoSave: false,
  inputProps: { maxLength: 20, minLength: 8 },
  required: true,
  placeholder: 'placeholder',
  errorMessage: '',
  error: false,
  className: ''
};

export const PnTextInputSingleSave = PnTextInputSingleSaveTemplate.bind({});
PnTextInputSingleSave.args = {
  label: 'Input',
  defaultValue: 'Default',
  inputProps: { maxLength: 20, minLength: 8 },
  required: true,
  placeholder: 'placeholder',
  errorMessage: '',
  error: false,
  className: ''
};