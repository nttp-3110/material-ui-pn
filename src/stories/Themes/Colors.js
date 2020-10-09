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
const ColorComponent = ({ color = 'red'}) => {
  return (
    <div>
      <b style={{ textTransform: 'capitalize' }}>{color}</b>
      <Grid container spacing={1}>
        {openColors[`${color}`].map((item, index) => {
          return (
            <Grid item xs={1.5} title={`openColors.${color}[${index}]`}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Box>{openColors[`${color}`][`${index}`]}</Box>
                <Box bgcolor={openColors[`${color}`][`${index}`]} css={{ borderRadius, width, height }} />
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
  color: PropTypes.string
};

export const Colors = () => (
  <article style={{ backgroundColor: 'lightblue' }}>
    <section style={{ backgroundColor: 'white', maxWidth: '100%' }}>
      <h2>Colors </h2>
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
