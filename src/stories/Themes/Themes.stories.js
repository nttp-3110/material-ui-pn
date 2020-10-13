import React from 'react';

// import { Themes } from '.';
import { Colors as ColorsComponent } from './Colors';
import { Typography as TypographyComponent } from './Typography';

export default {
  title: 'Themes',
  component: ColorsComponent,
};

const TemplateColors = (args) => <ColorsComponent {...args} />;
const TemplateTypography = (args) => <TypographyComponent {...args} />;

export const Colors = TemplateColors.bind({});
export const Typography = TemplateTypography.bind({});