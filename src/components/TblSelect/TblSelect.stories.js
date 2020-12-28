import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TblSelect from '.';
import ThemeContainer from '../../themes/ThemeContainer';

export default {
  title: 'Components/TblSelect',
  component: TblSelect,
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const SelectTemplate = (args) => (
  <ThemeContainer>
    <TblSelect
      {...args}
    >
      {names.map((item, index) => <MenuItem value={index}>{item}</MenuItem>)}     
    </TblSelect>
  </ThemeContainer>
);

export const Select = SelectTemplate.bind({});

Select.args = {
  label: 'Label -FixedWidth- Idle',
  defaultValue: 0,
  open: true
};