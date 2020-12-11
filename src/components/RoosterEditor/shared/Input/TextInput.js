import React, { useEffect, useCallback, useState, useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
// import useEventListener from './utils/useEventListener';
import InputLabel from './InputLabel';
// import InputSingleActions from './InputSingleActions';

import useStyles from './styled';
import { getByDisplayValue } from '@testing-library/react';

/**
 * TextField UI component for user interaction
 */
const PnTextInput = React.forwardRef(({
  required, label, defaultValue, placeholder, className,
  onChange, autoSave, onSave, onAbort,
  inputProps, InputProps,
  ...props
}, ref) => {
  const classes = useStyles();
  const inputContainerEl = useRef(null);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    if (!open && autoSave) {
      setOpen(true);
    }
    if (onChange) {
      onChange(e, setError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, props.error, props.errorMessage]);

  // NOTE: In order to gain access to the child component instance
  useImperativeHandle(ref, () => ({
    getElement() {
      return inputRef.current;
    },
    getHandleState() {
      return { setValue, setError };
    },
    value
  }));

  useEffect(() => {
    setValue(defaultValue);
    setError(props.error);
  }, [defaultValue, props.error, props.errorMessage]);

  return (
    <div>
      <div className={`${classes.root} ${className}`} ref={inputContainerEl}>
        <InputLabel
          label={label}
          required={required}
        />
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
              ref: inputRef,
              ...inputProps
            }}
            InputProps={{
              ...InputProps,
              endAdornment: <InputAdornment position='end'>
                {InputProps?.endAdornment}
                {error && <ErrorOutlineIcon className={`${classes.hasError}`} />}
              </InputAdornment>,

            }}
          />
        </div>
      </div>
    </div>
  );
});

PnTextInput.propTypes = {
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
  inputProps: PropTypes.any,
  InputProps: PropTypes.any
};

PnTextInput.defaultProps = {
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
  inputProps: {},
  InputProps: {}
};

export default PnTextInput;
