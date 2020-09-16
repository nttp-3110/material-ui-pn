import React, { useEffect, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import useEventListener from '../../utils/useEventListener';

import useStyles from './styled';

/**
 * TextField UI component for user interaction
 */
export const PnTextField = ({
  required, label, defaultValue, placeholder, className,
  onChange, singleSave, onSave, onAbort,
  inputProps,
  // error, errorMessage,
  ...props }) => {
  const classes = useStyles();
  const inputContainerEl = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = useCallback(event => {
    if (!!!singleSave) { 
      return;
    }
    const containerElement = inputContainerEl.current;
    let targetElement = event.target; // clicked element
    do {
      if (targetElement === containerElement) {
        setOpen(true);
        return;
      }
      // Go up the DOM.
      targetElement = targetElement.parentNode;
    } while (targetElement);
    handleSave();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    if (!open && singleSave) {
      setOpen(true);
    }
    if (required) {
      if (e.target.value === '') {
        setError(true);
        setErrorMessage('This information is required.');
      } else {
        setError(props.error);
        setErrorMessage(props.errorMessage);
      }
      
    }
    if (onChange) {
      onChange(e);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, props.error, props.errorMessage]);

  const handleCancel = useCallback((e) => {
    setValue(defaultValue);
    setOpen(false);
    if (onAbort) {
      onAbort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = useCallback((e) => {
    setOpen(false);
    if (value === defaultValue) {
      return;
    }
    if (onSave) {
      onSave(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, defaultValue]);

  useEventListener('click', handleClick);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setError(props.error);
    setErrorMessage(props.errorMessage);
  }, [props.error, props.errorMessage]);

  return (
    <div className={`${classes.root} ${className}`} ref={inputContainerEl}>
      <label className={classes.label}>{label} {required? <span className={classes.asterisk}>*</span>: ''}</label>
      <div className={classes.inputContainer}>
        <TextField
          {...props}
          variant='standard'
          className={clsx(classes.input, { [classes.inputError]: error })}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          InputProps={{
            ...inputProps,
            endAdornment: <InputAdornment position="end">
              {inputProps?.endAdornment}
              {error && <ErrorOutlineIcon className={`${classes.hasError}`}/>}
            </InputAdornment>,
          }}
        />
      </div>
      <div className={classes.hepperText}>
        {error && <div className={clsx({ [classes.hasOpen]: open, [classes.hasError]: error })}> {errorMessage} </div>}
        {open && <div className={`${classes.actions} flyout-buttons`}>
          <ClearIcon className={`${classes.actionBtn} ${classes.clearIcon}`} onClick={handleCancel}/>
          <DoneIcon className={`${classes.actionBtn} ${classes.doneIcon}`} onClick={handleSave}/>
        </div>
        }
      </div>
    </div>
  );
};

PnTextField.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  singleSave: PropTypes.bool,
  defaultValue: PropTypes.string,

  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onAbort: PropTypes.func,
  
  errorMessage: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  inputProps: PropTypes.any
};

PnTextField.defaultProps = {
  required: false,
  label: '',
  placeholder: 'placeholder',
  singleSave: false,
  defaultValue: '',

  onChange: undefined,
  onSave: undefined,
  onAbort: undefined,

  errorMessage: '',
  error: false,
  className: '',
  inputProps: {}
};
