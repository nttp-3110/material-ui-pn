import React, { useEffect, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';

import TextField from '@material-ui/core/TextField';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';
import useEventListener from '../../utils/useEventListener';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import useStyles from './styled';

/**
 * TextField UI component for user interaction
 */

function checkNegativeNumber(value) {
  const negationRegex = new RegExp('(-)');
  return negationRegex.test(value);
}

function formatNegation(value= '') {
  const allowNegative = true;
  // const { allowNegative } = this.props;
  const negationRegex = new RegExp('(-)');
  const doubleNegationRegex = new RegExp('(-)(.)*(-)');

  // Check number has '-' value
  const hasNegation = negationRegex.test(value);

  // Check number has 2 or more '-' values
  const removeNegation = doubleNegationRegex.test(value);

  //remove negation
  value = value.replace(/-/g, '');

  if (hasNegation && !removeNegation && allowNegative) {
    value = '-' + value;
  }

  return value;
}

function toFixedTrunc(x, n) {
  const v = (typeof x === 'string' ? x : x.toString()).split('.');
  if (n <= 0) return v[0];
  let f = v[1] || '';
  if (f.length > n) return `${v[0]}.${f.substr(0, n)}`;
  while (f.length < n) f += '0';
  return `${v[0]}.${f}`;
}
export const PnNumberInput = ({
  required, label, defaultValue, placeholder, className,
  min, max, decimal,
  onChange, autoSave, onSave, onAbort,
  ...props }) => {
  const classes = useStyles();
  const inputContainerEl = useRef(null);
  const inputRef = useRef(null);
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
  }, [value, autoSave]);

  const handleKeyPress = useCallback(evt => {
    if ((evt.which < 48 && ![45, 46].includes(evt.which )) || evt.which > 57) {
      evt.preventDefault();
      return;
    }
    switch (evt.which) { 
      case 101:
      case 43:
        evt.preventDefault();
        return false;
      case 45:
        if (checkNegativeNumber(value)) {
          evt.preventDefault();
        }
        return false;
      case 46:
        if (decimal && (value.split('.').length === 2)) {
          evt.preventDefault();
        }
        break;
      default:
        break;
    }
    return true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decimal, value]);

  const updateValue = useCallback((val) => {
    if (!isNil(min) && Number(val) < Number(min)) {
      setValue(min);
    } else if (!isNil(max) && Number(val) > Number(max)) {
      setValue(max);
    } else {
      setValue(val);
    }

    if (required) {
      if (val === '') {
        setError(true);
        setErrorMessage('This information is required.');
      } else {
        setError(props.error);
        setErrorMessage(props.errorMessage);
      }

    }
  }, [min, max, required, props.error, props.errorMessage]);

  const handleChange = useCallback((e) => {
    let val = formatNegation(e.target.value);
    if (isNaN(val) && val !== '-') {
      return;
    }
    if (!isNil(decimal) && val.split('.')[1]) {
      if (val.split('.')[1].length > decimal) {
        setValue(toFixedTrunc(val, decimal));
        return;
      }
    }
    if (!open && autoSave) {
      setOpen(true);
    }
    updateValue(val);
    
    if (onChange) {
      onChange(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, props.error, props.errorMessage, decimal, min, max, required, autoSave]);

  const handleCancel = useCallback((e) => {
    setValue(defaultValue);
    setOpen(false);
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
    if (inputVal === defaultValue || isNaN(inputVal)) {
      return;
    }
    alert(inputVal);
    if (onSave) {
      onSave(inputVal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, defaultValue, autoSave]);

  const handleValue = useCallback((isPlus = true) => {
    const val = parseInt(value || 0);
    updateValue(isPlus ? val + 1 : val - 1);
  }, [updateValue, value]);
  
  const handleKeyDown = useCallback((e) => {
    if (e.keyCode === 38) {
      handleValue();
    } else if (e.keyCode === 40) {
      handleValue(false);
    };
  }, [handleValue]);

  useEventListener('click', handleClick, () => handleSave(inputRef?.current?.value));
  useEventListener('keypress', handleKeyPress);
  useEventListener('keydown', handleKeyDown);

  useEffect(() => {
    setValue(defaultValue);
    setError(props.error);
    setErrorMessage(props.errorMessage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          type='text'
          inputProps={{
            ref: inputRef
          }}
          InputProps={{
            endAdornment: <InputAdornment position='end' className={classes.controlActionWrapper}>
              <div className={classes.controlActionContent}>
                <div className={classes.dropDownIcon}><ArrowDropDownIcon onClick={() => handleValue(false)}/></div>
                <div className={classes.dropUpIcon} ><ArrowDropUpIcon onClick={() => handleValue(true)} /></div>
              </div>

            </InputAdornment>
          }
          }
        />
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
  decimal: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
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
  decimal: null,
  min: null,
  max: null
};
