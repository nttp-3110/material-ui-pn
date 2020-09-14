import React from 'react';

import { Page } from '.';
// import * as HeaderStories from '../../components/Header/Header.stories';

export default {
  title: 'Example/Form',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const TextField = Template.bind({});
TextField.args = {

};