import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { PnNumberInput, PnTextInput } from '../../components/TextField';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article style={{ backgroundColor: 'lightblue' }}>
    <section style={{ backgroundColor: 'white' }}>
      <h2>Text Field / Input </h2>
      <p>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <PnTextInput label='Single Save' autoSave />
            <PnTextInput label='label 3' />
          </Grid>
          <Grid item xs={4}>
            <PnTextInput label='label 3' required/>
          </Grid>
          <Grid item xs={4}>
            <PnTextInput label='label 3' />
          </Grid>
          <Grid item xs={4}>
            <PnNumberInput label='Number auto save' autoSave />
          </Grid>
          <Grid item xs={4}>
            <PnNumberInput label='Number' />
          </Grid>
          <Grid item xs={4}>
            <PnTextInput label='label 3' />
          </Grid>
          <Grid item xs={4}>
            <PnTextInput label='Label - 4 Col - Idle' autoSave/>
          </Grid>
          <Grid item xs={4}>
            <PnTextInput label='Label - 4 Col' autoSave error errorMessage='Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. '/>
          </Grid>
          <Grid item xs={4}>
            <PnTextInput label='Label - 4 Col' error errorMessage='Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. ' />
          </Grid>
        </Grid>
      </p>
    </section>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
