import React, { useEffect, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import useEventListener from '../../utils/useEventListener';
import debounce from 'lodash/debounce';
import toNumber from 'lodash/toNumber';

import useStyles from './styled';

/**
 * TextField UI component for user interaction
 */

export const PnNumberInput = ({
  required, label, defaultValue, placeholder, className,
  min, max, decimal,
  onChange, autoSave, onSave, onAbort,
  // error, errorMessage,
  ...props }) => {
  const classes = useStyles();
  const inputContainerEl = useRef(null);
  const [open, setOpen] = useState(false);
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

  const handleKeyPress = useCallback(evt => {
    console.log(value, inputContainerEl.current.getSelection, evt.which, this);
    switch (evt.which) { 
      case 101:
      case 43:
        evt.preventDefault();
        return false;
      case 45:
        if (decimal && (value.split('-')[0] || value.split('-')[value.split('-').length -1])) {
          evt.preventDefault();
        }
        break;
      default:
        break;
    }
    return true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = useCallback((e) => {
    console.log(min, max, e);
    const val = e.target.value;
    if (decimal && val.split('.')[1]) {
      if (val.split('.')[1].length > decimal) {
        return;
      }
    }
    if (!open && autoSave) {
      setOpen(true);
    }
    if (Number(e.target.value) < Number(min)) {
      setValue(min);
    } else if (Number(e.target.value) > Number(max)) {
      setValue(max);
    } else {
      setValue(e.target.value);
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

  const handleKeyUp = (e) => {
    console.log('handleKeyUp', e.target?.onSelectionStart(e));
  };
  const handleKeyDown = (e) => {
    console.log('handleKeyDown', e.target?.value);
  };

  useEventListener('click', handleClick);
  useEventListener('keypress', handleKeyPress);
  useEventListener('keypress', handleKeyDown);
  useEventListener('keyup', handleKeyUp);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    console.log(max);
  }, [max]);

  useEffect(() => {
    setError(props.error);
    setErrorMessage(props.errorMessage);
  }, [props.error, props.errorMessage]);

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
          type='number'
        />
        {error && <ErrorOutlineIcon className={`${classes.iconError} ${classes.hasError}`} />}
      </div>
      <div className={classes.hepperText}>
        {error && <div className={clsx({ [classes.hasOpen]: open, [classes.hasError]: error })}> {errorMessage} </div>}
        {open && <div className={`${classes.actions} flyout-buttons`}>
          <ClearIcon className={`${classes.actionBtn} ${classes.clearIcon}`} onClick={handleCancel} />
          <DoneIcon className={`${classes.actionBtn} ${classes.doneIcon}`} onClick={handleSave} />
        </div>
        }
      </div>
    </div>
  );
};

PnNumberInput.propTypes = {
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
  decimal: PropTypes.number
};

PnNumberInput.defaultProps = {
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
  decimal: 0
};
