import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import SelectButton from '.';
import ThemeContainer from '../../themes/ThemeContainer';

export default {
  title: 'Components/SelectButton',
  component: SelectButton,
};

const SelectButtonTemplate = (args) => (
  <ThemeContainer>
    <SelectButton
      {...args}
    >
      <MenuItem value='1'>
        <div className='menu-content'>
          Option 1
        </div>
        <div className='selected-tick' />
      </MenuItem>
      <MenuItem value='2'>
        <div className='menu-content'>
          Option 2
        </div>
        <div className='selected-tick' />
      </MenuItem>
    </SelectButton>
  </ThemeContainer>
);

export const SelectButtonExample = SelectButtonTemplate.bind({});

SelectButtonExample.args = {
  defaultValue: 1,
  open: true
};