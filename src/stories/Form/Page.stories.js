import React from 'react';

import { Page } from '.';
import ThemeContainer from '../../themes/ThemeContainer';
export default {
  title: 'Example/Form',
  component: Page,
};

const Template = (args) => <ThemeContainer><Page {...args} /></ThemeContainer>;

export const TextField = Template.bind({});
TextField.args = {

};