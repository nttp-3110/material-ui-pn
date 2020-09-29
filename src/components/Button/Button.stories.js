import React from 'react';
import {TblButton} from '.';

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Button',
  component: TblButton,
};

const Template = (args) => <TblButton {...args} />;

export const ButtonTemplate = Template.bind({});

ButtonTemplate.args = {
  
};