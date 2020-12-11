import React from 'react';
import { Rooster } from './rooster-multi';
import ThemeContainer from '../../themes/ThemeContainer';

export default {
    title: 'Rooster/Multi RoosterJS ',
    component: Rooster
};
const Template = (args) => <ThemeContainer><Rooster {...args} /></ThemeContainer>;
export const Default = Template.bind({});
