import React, { useRef, useCallback, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import InputSingleActions from './InputSingleActions';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import useOnClickOutside from '../hooks/useOnClickOutside';
import TextInput from '../InputFields/TextInput';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .focus-content': {
      '& .input-container': {
        borderColor: theme.mainColors.primary2[0],
        outline: 'none',
        boxShadow: 'rgba(235,241,249,1) 0 0 0 3px'
      },
    },
    '& .has-error': {
      '& .input-container': {
        borderColor: theme.palette.error.main
      }
    },
  }
}));
const InputComponent = React.forwardRef(({ Component, label, onSave, onAbort, onChange, handleClickInside, disabled, autoSave, defaultValue, ...rest }, ref) => {

  const classes = useStyles();
  const inputRef = React.useRef();
  const inputActionsRef = React.useRef();
  const inputContainerRef = useRef();

  const [error, setError] = useState({});

  const handleSave = useCallback(e => {
    if (onSave && autoSave) {
      onSave(e, inputRef, setError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { clickedOutside, setClickedOutside, addEventListener, removeEventListener } = useOnClickOutside(inputContainerRef, true, disabled, handleSave);

  useWhyDidYouUpdate('InputComponent', { Component, label, onSave, onAbort, onChange, handleClickInside, disabled, autoSave, defaultValue, rest });

  const handleCancel = useCallback(e => {
    if (onAbort && autoSave) {
      onAbort(e, inputRef, setError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickInside = useCallback((e) => {
    if (disabled) {
      return;
    }
    setClickedOutside(inputActionsRef.current.contains(e.target));
  }, [disabled, setClickedOutside]);

  React.useEffect(() => {
    if (!clickedOutside && !disabled) {
      addEventListener();
      if (handleClickInside) {
        handleClickInside(inputRef);
      }
    } else {
      removeEventListener();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedOutside, disabled, inputRef, handleClickInside]);

  useImperativeHandle(ref, () => ({
    inputField: inputRef.current,
    setError
  }));

  const contentMemo = React.useMemo(() => (
    <Component
      ref={inputRef}
      label={label}
      disabled={disabled}
      onClickInside={onClickInside}
      defaultValue={defaultValue}
      onChange={(e) => {
        // console.log(inputRef, 'inputRef');
        if (onChange) {
          onChange(e, inputRef, error, setError);
        }
      }}
      {...rest}

    />
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [error, defaultValue]);

  const actionMemo = React.useMemo(() => (
    <div ref={inputActionsRef} >
      <InputSingleActions
        open={autoSave ? !clickedOutside && !disabled : false}
        IconSave={DoneIcon}
        IconCancel={ClearIcon}
        handleSave={handleSave}
        handleCancel={handleCancel}
        error={error}
      />
    </div>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [autoSave, clickedOutside, disabled, error]);

  return (
    <div ref={inputContainerRef} className={classes.root} onClick={onClickInside}>
      <div className={clsx({ 'focus-content': !clickedOutside, 'has-error': error.hasError })}>
        {contentMemo}
      </div>

      {actionMemo}
    </div >
  );
});

InputComponent.propTypes = {
  ref: PropTypes.any,
  onSave: PropTypes.func,
  onAbort: PropTypes.func,
  autoSave: PropTypes.bool,
  Component: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func,
  handleClickInside: PropTypes.func,
  disabled: PropTypes.bool
};
InputComponent.defaultProps = {
  Component: TextInput
};

export default InputComponent;