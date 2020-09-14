import React, { useEffect, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import useEventListener from '../../utils/useEventListener';
// import './index.css';
import useStyles from './styled';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%'
//   },
//   label: {
//     padding: '6px 8px',
//     fontSize: '15px',
//     display: 'block',
//     color: '#212529'
//   },
//   inputContainer: {
//     position: 'relative'
//   },
//   input: {
//     padding: '10px 8px',
//     borderRadius: '8px',
//     border: '1px solid #E9ECEF',
//     width: 'calc(100% - 18px)',
//     fontSize: '15px',
//     color: '#212529',
//     '&:focus': {
//       outline: 'none',
//       borderColor: '#1A7AE6',
//     }
//   },
//   iconError: {
//     position: 'absolute',
//     right: '8px',
//     bottom: '10px',
//     fontSize: '18px'
//   },
//   hasError: {
//     color: '#E03131'
//   },
//   inputError: {
//     color: '#E03131',
//     borderColor: '#E03131'
//   },
//   hepperText: {
//     position: 'relative',
//     marginTop: '8px',
//     paddingLeft: '8px',
//     fontSize: '15px'
//   },
//   hasOpen: {
//     marginRight: '76px'
//   },
//   actions: {
//     position: 'absolute',
//     top: 0,
//     right: 0
//   },
//   actionBtn: {
//     fontSize: '20px',
//     borderRadius: '8px',
//     padding: '6px',
//     cursor: 'pointer'
//   },
//   clearIcon: {
//     backgroundColor: '#E9ECEF',
//     color: '#495057',
//     marginRight: '4px'
//   },
//   doneIcon: {
//     backgroundColor: '#1A7AE6',
//     color: '#FFFFFF'
//   }
// }));
/**
 * Primary UI component for user interaction
 */
export const PnTextField = ({ label, defaultValue, onChange, singleSave, onSave, onAbort, error, errorMessage, placeholder, ...props }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = useCallback((e) => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEventListener('click', handleClick);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <div className={`${classes.root}`} ref={inputContainerEl}>
      <label className={classes.label}>{label}</label>
      <div className={classes.inputContainer}>
        <input
          className={clsx(classes.input, { [classes.inputError]: error })}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
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
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
  error: PropTypes.bool,
  singleSave: PropTypes.bool,
  placeholder: PropTypes.string
};

PnTextField.defaultProps = {
  onChange: undefined,
  defaultValue: '',
  errorMessage: 'Error',
  error: false,
  singleSave: false,
  placeholder: 'placeholder'
};
