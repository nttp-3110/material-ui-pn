import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(0.75, 1),
  },
  editorLabel: {
    fontSize: '15px',
    fontWeight: '600',
    display: 'block',
    color: theme.mainColors.primary1[0],
    whiteSpace: 'nowrap',
    overflow: ' hidden !important',
    textOverflow: 'ellipsis',
    '&::first-letter': {
      textTransform: 'uppercase'
    }
  },
  asterisk: {
    color: theme.palette.error.main,
  }
});
class InputLabel extends React.Component {
  render() {
    const { classes, label, required, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.editorLabel}>
          <label >{label}</label>
        </div>
        {required ? <div className={classes.asterisk}>*</div> : ''}
      </div>
    );
  }
}
InputLabel.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.array,
  required: PropTypes.bool,
};
export default withStyles(styles)(InputLabel);
