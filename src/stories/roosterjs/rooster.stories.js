import React from 'react';
import { Rooster } from './rooster';
import ThemeContainer from '../../themes/ThemeContainer';
import { ReactComponent as IcnAlignRight } from '../assets/colors.svg';

export default {
  title: 'Rooster/RoosterJS',
  component: Rooster
};
const Template = (args) => <ThemeContainer> <Rooster {...args} /> </ThemeContainer>;
export const Default = Template.bind({});
const buttons = {
  color: {
    title: 'More options',
    image: IcnAlignRight,
    onClick: () => alert('hello')
  }
};
Default.args = {
  required: true,
  autoSave: false,
  label: 'Editor',
  defaultValue: 'defaultValue',
  height: 200,
  placeholder: 'Placeholder',
  customButtons: buttons
};