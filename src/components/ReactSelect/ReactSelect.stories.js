import React from 'react';

import ReactSelect from '.';
import ThemeContainer from '../../themes/ThemeContainer';

export default {
  title: 'Components/ReactSelect',
  component: ReactSelect,
};

const options = [
  { value: 'longText', label: 'This’s a long text with 70 characters per row, Loremoe. It’s full now. And then it will auto add another rows to show full option details. 3rd row with full text Lorem Ipsum Lorem Ipsum Lorem Ipsum Lo... 4th... :D nah.'},
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'theShawshankRedemption', label: 'The Shawshank Redemption' },
  { value: 'theGodfather', label: 'The Godfather' },
  { value: 'theDarkKnight', label: 'The Dark Knight' },
  { value: '12AngryMen', label: '12 Angry Men' },
  { value: 'schindlerList', label: "Schindler's List" },
  { value: 'pulpFiction', label: 'Pulp Fiction' },
  { value: 'theLordOfTheRing', label: 'The Lord of the Rings: The Return of the King'}

];

const ReactSelectTemplate = (args) => (
  <ThemeContainer>
    <ReactSelect
      options={options}
      {...args}
    />
  </ThemeContainer>
);

export const MultiSelect = ReactSelectTemplate.bind({});

MultiSelect.args = {
  label: 'Label - Fixed Width Multiple',
  placeholder: 'Please select...',
  isMulti: true,
  menuIsOpen: true,
  isClearable: true,
  hideSelectedOptions: false,
  isSearchable: false
};

export const SingleSelect = ReactSelectTemplate.bind({});

SingleSelect.args = {
  label: 'Label - Fixed Width Single',
  placeholder: 'Please select...',
  menuIsOpen: true,
  isClearable: false,
  hideSelectedOptions: false,
  isSearchable: false
};

