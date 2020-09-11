import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import './index.css';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& .col-3': {
      float: 'left',
      width: '27.33%',
      margin: '40px 3%',
      position: 'relative'
    },
    '& input[type = "text"]': {
      font: '15px/24px "Muli", sans- serif',
      color: '#333', width: '100%',
      boxSizing: 'border-box',
      letterSpacing: '1px'
    },
    '& .effect-7': {
      border: '1px solid #ccc',
      padding: '7px 14px 9px',
      transition: '0.4s',
      '& ~ .focus-border:before, & ~ .focus-border:after': {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        width: 0,
        height: '2px',
        backgroundColor: '#4caf50',
        transition: '0.4s'
      },
      '& ~ .focus-border:after': {
        top: 'auto',
        bottom: 0
      },
      '& ~ .focus-border i:before, & ~ .focus-border i:after': {
        content: '',
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '2px',
        height: 0,
        backgroundColor: '#4caf50',
        transition: '0.6s'
      },
      '& ~ .focus-border i:after': {
        left: 'auto',
        right: 0
      },
      '&:focus ~ .focus-border:before, &:focus ~ .focus-border:after': {
        left: 0,
        width: '100%',
        transition: '0.4s'
      },
      '&:focus ~ .focus-border i:before, &:focus ~ .focus-border i:after': {
        top: 0,
        height: '100%',
        transition: '0.6s'
      }
    },
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));
/**
 * Primary UI component for user interaction
 */
export const PnTextField = ({ primary, backgroundColor, size, label, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        id='outlined-full-width'
        label='Label'
        style={{ margin: 8 }}
        placeholder='Placeholder'
        helperText='Full width!'
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
      />
      <div class='col-3'>
        <input class='effect-7' type='text' placeholder='Placeholder Text' />
          <span class='focus-border'>
            <i></i>
          </span>
      </div>
    </div>
  );
};

PnTextField.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the TextField be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

PnTextField.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
