import React, { useEffect, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import useEventListener from '../../utils/useEventListener';

import useStyles from './styled';

/**
 * TextField UI component for user interaction
 */
export const PnTextField = ({ label, defaultValue, onChange, singleSave, onSave, onAbort, error, errorMessage, placeholder, className, ...props }) => {
  const classes = useStyles();
  const inputContainerEl = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

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
    setOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (onSave) {
      onSave(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEventListener('click', handleClick);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <div className={`${classes.root} ${className}`} ref={inputContainerEl}>
      <label className={classes.label}>{label}</label>
      <div className={classes.inputContainer}>
        <input
          className={clsx(classes.input, { [classes.inputError]: error })}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...props}
        />
        {error && <ErrorOutlineIcon className={`${classes.iconError} ${classes.hasError}`} />}
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
  label: PropTypes.string,
  placeholder: PropTypes.string,
  singleSave: PropTypes.bool,
  defaultValue: PropTypes.string,

  onChange: PropTypes.func,
  onSave: PropTypes.func,
  onAbort: PropTypes.func,
  
  errorMessage: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string
};

PnTextField.defaultProps = {
  label: '',
  placeholder: 'placeholder',
  singleSave: false,
  defaultValue: '',

  onChange: undefined,
  onSave: undefined,
  onAbort: undefined,

  errorMessage: 'Error Message',
  error: false,
  className: ''
};
