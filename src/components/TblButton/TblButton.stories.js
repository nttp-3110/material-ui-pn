import React from 'react';
import Button from '.';

export default {
  title: 'Components/TblButton',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Solid = Template.bind({});

Solid.args = {
  label: 'Button Label'
};