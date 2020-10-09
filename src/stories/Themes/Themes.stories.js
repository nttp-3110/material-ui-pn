import React from 'react';

// import { Themes } from '.';
import { Colors as ColorsComponent } from './Colors';

export default {
  title: 'Themes',
  component: ColorsComponent,
};

const TemplateColors = (args) => <ColorsComponent {...args} />;
// const Template = (args) => <Themes {...args} />;

export const Colors = TemplateColors.bind({});
Colors.args = {

};