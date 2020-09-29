import React, { useEffect, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import useEventListener from './utils/useEventListener';

import useStyles from './styled';

/**
 * TextField UI component for user interaction
 */

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '')
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  return null
}
export const PnTelephoneInput = ({
  required, label, defaultValue, placeholder, className,
  onChange, autoSave, onSave, onAbort,
  inputProps,
  ...props }) => {
  const classes = useStyles();
  const inputContainerEl = useRef(null);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [currentEl, setCurrentEl] = useState(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = useCallback(event => {
    if (!!!autoSave) {
      return;
    }
    const containerElement = inputContainerEl.current;
    let targetElement = event.target; // clicked element
    do {
      if (targetElement.parentNode?.className?.includes("action")) {
        return;
      }
      if (targetElement === containerElement) {
        setOpen(true);
        setCurrentEl(inputRef?.current);
        inputRef.current.focus();
        return;
      }
      // Go up the DOM.
      targetElement = targetElement.parentNode?.parentNode;
    } while (targetElement);
    if (inputRef.current === currentEl) {
      handleSave();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, defaultValue, autoSave, currentEl]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    if (!open && autoSave) {
      setOpen(true);
    }
    console.log(e.target.value, formatPhoneNumber(e.target.value));
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
    setCurrentEl(null);
    if (onAbort) {
      onAbort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = useCallback((val) => {
    if (!autoSave) {
      return;
    }
    const inputVal = val || value;
    setOpen(false);
    setCurrentEl(null);

    if (inputVal === defaultValue) {
      return;
    }
    console.log('text =======', inputVal);
    if (onSave) {
      onSave(inputVal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, defaultValue, autoSave]);

  const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
      (key >= 96 && key <= 105) // Allow number pad
    );
  };

  const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
      (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      (
        // Allow Ctrl/Command + A,C,V,X,Z
        (event.ctrlKey === true || event.metaKey === true) &&
        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
      )
  };

  const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(event) && !isModifierKey(event)) {
      event.preventDefault();
    }
  };

  const formatToPhone = (event) => {
    if (isModifierKey(event)) { return; }

    // I am lazy and don't like to type things more than once
    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) { target.value = `(${zip}) ${middle} - ${last}`; }
    else if (input.length > 3) { target.value = `(${zip}) ${middle}`; }
    else if (input.length > 0) { target.value = `(${zip}`; }
  };

  useEventListener('click', handleClick, () => handleSave(inputRef?.current?.value));
  useEventListener('keydown', enforceFormat);
  useEventListener('keyup', formatToPhone);

  useEffect(() => {
    setValue(defaultValue);
    setError(props.error);
    setErrorMessage(props.errorMessage);
  }, [defaultValue, props.error, props.errorMessage]);

  return (
    <div className={`${classes.root} ${className}`} ref={inputContainerEl}>
      <label className={classes.label}>{label} {required ? <span className={classes.asterisk}>*</span> : ''}</label>
      <div className={classes.inputContainer}>
        <TextField
          {...props}
          variant='standard'
          className={clsx(classes.input, { [classes.inputError]: error })}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          inputProps={{
            ref: inputRef
          }}
          InputProps={{
            ...inputProps,
            endAdornment: <InputAdornment position='end'>
              {inputProps?.endAdornment}
              {error && <ErrorOutlineIcon className={`${classes.hasError}`} />}
            </InputAdornment>,

          }}
        />
      </div>
      <div className={classes.hepperText}>
        {error && <div className={clsx({ [classes.hasOpen]: open, [classes.hasError]: error })}> {errorMessage} </div>}
        {open && <div className={`${classes.actions} flyout-buttons`}>
          <div className={`${classes.actionBtn} ${classes.clearIcon} action`} onClick={handleCancel}><ClearIcon className={classes.icon} /></div>
          <div className={`${classes.actionBtn} ${classes.doneIcon} action`} onClick={() => handleSave(value)}><DoneIcon className={classes.icon} /></div>
        </div>
        }
      </div>
    </div>
  );
};

PnTelephoneInput.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  autoSave: PropTypes.bool,
  defaultValue: PropTypes.string,

  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onAbort: PropTypes.func,

  errorMessage: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  inputProps: PropTypes.any
};

PnTelephoneInput.defaultProps = {
  required: false,
  label: '',
  placeholder: 'placeholder',
  autoSave: false,
  defaultValue: '',

  onChange: undefined,
  onSave: undefined,
  onAbort: undefined,

  errorMessage: '',
  error: false,
  className: '',
  inputProps: {}
};
