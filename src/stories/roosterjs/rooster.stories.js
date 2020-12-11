import React from 'react';
import { Rooster } from './rooster';
import ThemeContainer from '../../themes/ThemeContainer';

export default {
    title: 'Rooster/RoosterJS',
    component: Rooster
};
const Template = (args) => <ThemeContainer> <Rooster {...args} /> </ThemeContainer>;
export const Default = Template.bind({});