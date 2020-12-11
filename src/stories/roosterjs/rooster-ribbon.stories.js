import React from 'react';
import { Rooster } from './rooster-custom-ribbon';
import ThemeContainer from '../../themes/ThemeContainer';

export default {
    title: 'Rooster/RoosterJS Custom Ribbon',
    component: Rooster
};
const Template = (args) => <ThemeContainer><Rooster {...args} /></ThemeContainer>;
export const Default = Template.bind({});
