import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { default as openColors } from '../../themes/open-color.json'; //NOTE: Use open color at https://yeun.github.io/open-color/
import mainColors from '../../themes/colors'; //NOTE: This is colors of our project
import { fontSize, fontSizeIcon, fontWeight } from '../../themes/fontSize'; //NOTE: This is colors of our project
const borderRadius = 12;
const width = 88;
const height = 64;
const ColorComponent = ({ dataColors = openColors, color = 'red'}) => {
  return (
    <div>
      <b style={{ textTransform: 'capitalize' }}>{color}</b>
      <Grid container spacing={1}>
        {dataColors[`${color}`].map((colorCode, index) => {
          return (
            <Grid item xs={1.5} title={`openColors.${color}[${index}]`}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Box>{colorCode}</Box>
                <Box bgcolor={colorCode} css={{ borderRadius, width, height }} />
                <Box>{color} {index}</Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

ColorComponent.propTypes = {
  color: PropTypes.string,
  dataColors: PropTypes.object
};

export const Colors = () => (
  <article style={{ backgroundColor: 'lightblue' }}>
    <section style={{ backgroundColor: 'white', maxWidth: '100%' }}>
      <Box color={mainColors.primary[0]} fontSize={fontSize.h5} fontWeight={fontWeight.bold} m={2}>
        Colors
      </Box>
      <Box color={openColors.green[9]} fontSize={fontSize.body1} fontWeight={fontWeight.semi} m={2}>
        Primary Color(s) & Shades
      </Box>
      <ColorComponent color='primary' dataColors={mainColors} />
      <ColorComponent color='neutral' dataColors={mainColors} />
      <Box color={openColors.green[9]} fontSize={fontSize.body1} fontWeight={fontWeight.semi} m={2}>
        Secondary Colors & Shades
      </Box>
      <ColorComponent color='red' />
      <ColorComponent color='pink' />
      <ColorComponent color='grape' />
      <ColorComponent color='violet' />
      <ColorComponent color='indigo' />
      <ColorComponent color='blue' />
      <ColorComponent color='cyan' />
      <ColorComponent color='teal' />
      <ColorComponent color='green' />
      <ColorComponent color='lime' />
      <ColorComponent color='yellow' />
      <ColorComponent color='orange' />
    </section>
  </article>
);
Colors.propTypes = {
  color: PropTypes.string
};

Colors.defaultProps = {
  color: 'red'
};
