import React from 'react';
import { Rooster } from './rooster-multi-single-save';
import ThemeContainer from '../../themes/ThemeContainer';

export default {
  title: 'Rooster/RoosterJS Multi Single Save',
  component: Rooster
};
const Template = (args) => <ThemeContainer> <Rooster {...args} /> </ThemeContainer>;
export const Default = Template.bind({});