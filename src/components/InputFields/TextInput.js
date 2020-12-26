import React, { useEffect, useCallback, useState, useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import InputLabel from '../InputComponent/InputLabel';
import useStyles from './styled';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';

/**
 * TextField UI component for user interaction
 */
const TextInput = React.forwardRef(({
  required, label, defaultValue, placeholder, className,
  onChange, inputProps, InputProps,
  error,
  ...props
}, ref) => {
  const classes = useStyles();
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  useWhyDidYouUpdate('TextInput', {
    required, label, defaultValue, placeholder, className,
    onChange, inputProps, InputProps,
    error, props
  });

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useImperativeHandle(ref, () => ({
    input: inputRef.current,
    setValue,
    value
  }));

  return (
    <div>
      <div className={`${classes.root} ${className}`}>
        <InputLabel
          label={label}
          required={required}
        />
        <div className={classes.inputContainer}>
          <TextField
            variant='standard'
            className={clsx(classes.input, { [classes.inputError]: error })}
            defaultValue={defaultValue}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            inputRef={inputRef}
            inputProps={{
              ...inputProps
            }}
            InputProps={{
              ...InputProps,
              endAdornment: <InputAdornment position='end'>
                {InputProps?.endAdornment}
                {error && <ErrorOutlineIcon className={`${classes.hasError}`} />}
              </InputAdornment>,

            }}

            {...props}
          />
        </div>
      </div>
    </div>
  );
});

TextInput.propTypes = {
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

TextInput.defaultProps = {
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

// export default React.forwardRef((props, ref) => <TextInput {...props} ref={ref} />);
export default TextInput;
