import React from 'react';
import { Rooster } from './rooster-single-save';
import ThemeContainer from '../../themes/ThemeContainer';

export default {
  title: 'Rooster/RoosterJS Single Save',
  component: Rooster
};
const Template = (args) => <ThemeContainer> <Rooster {...args} /> </ThemeContainer>;
export const Default = Template.bind({});