import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { default as openColors } from '../../themes/open-color.json'; //NOTE: Use open color at https://yeun.github.io/open-color/
import mainColors from '../../themes/colors'; //NOTE: This is colors of our project
import { fontSize, fontWeight } from '../../themes/fontSize'; //NOTE: This is colors of our project

const headingTitle = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Box color={openColors.red[9]} >
          Name
          </Box>
      </Grid>
      <Grid item xs={2} color='red'>
        <Box color={openColors.red[9]} >
          Scale
          </Box>
      </Grid>
      <Grid item xs={8}>
        <Box color={openColors.red[9]} >
          Review
          </Box>
      </Grid>
    </Grid>
  );
};
const FontSizeComponent = ({ }) => {
  return (
    <div>
      {headingTitle()}
      {Object.keys(fontSize).map(fontsizeKey => {
        const scale = fontSize[`${fontsizeKey}`];
        return (
           <Grid container spacing={1}>
            <Grid item xs={2}>
              {fontsizeKey}
            </Grid>
            <Grid item xs={2}>
              {scale}
            </Grid>
            <Grid item xs={8} className='text-ellipsis'>
              <Box color={mainColors.primary[0]} fontSize={scale} m={2}>
              Nulla nisi mollit velit elit proident et.
            </Box>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

FontSizeComponent.propTypes = {};

const FontWeightComponent = ({ color = 'red' }) => {
  return (
    <div>
      {headingTitle()}
      {Object.keys(fontWeight).map(fontWeightKey => {
        const scale = fontWeight[`${fontWeightKey}`];
        return (
          <Grid container spacing={1}>
            <Grid item xs={2}>
              {fontWeightKey}
            </Grid>
            <Grid item xs={2}>
              {scale}
            </Grid>
            <Grid item xs={8} className='text-ellipsis'>
              <Box color={mainColors.primary[0]} fontSize={fontSize.label} fontWeight={scale} m={2}>
                Nulla nisi mollit velit elit proident et.
            </Box>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

FontWeightComponent.propTypes = {
  color: PropTypes.string,
  dataColors: PropTypes.object
};

export const Typography = () => (
  <article style={{ backgroundColor: 'lightblue' }}>
    <section style={{ backgroundColor: 'white', maxWidth: '100%' }}>
      <Box color={mainColors.primary[0]} fontSize={fontSize.h5} fontWeight={fontWeight.bold} m={2}>
        Typography
      </Box>
      <Box color={openColors.green[9]} fontSize={fontSize.subH1} fontWeight={fontWeight.bold} m={2}>
        Roboto
      </Box>

      <Box color={mainColors.primary[0]} fontSize={fontSize.body1} fontWeight={fontWeight.normal} m={2}>
        Officia pariatur proident velit ullamco irure duis cillum cillum commodo laborum ullamco voluptate dolore. Duis amet cillum aliqua cillum excepteur eu occaecat sint veniam dolore pariatur aliquip dolore. Qui eiusmod ullamco non amet cillum adipisicing ut ex elit ipsum tempor. Exercitation proident quis ipsum ea ullamco enim quis nulla sunt Lorem veniam. Anim proident elit veniam reprehenderit Lorem est nisi do eiusmod. Tempor do velit aute reprehenderit. Incididunt adipisicing id dolor do incididunt ipsum esse magna nisi enim aliquip in.
      </Box>

      <Box color={openColors.green[9]} fontSize={fontSize.body1} fontWeight={fontWeight.semi} m={2}> Font Size </Box>
      <FontSizeComponent />

      <Box color={openColors.green[9]} fontSize={fontSize.body1} fontWeight={fontWeight.semi} m={2}> Font Weight </Box>
      <FontWeightComponent />
    </section>
  </article>
);
Typography.propTypes = {
  color: PropTypes.string
};

Typography.defaultProps = {
  color: 'red'
};
