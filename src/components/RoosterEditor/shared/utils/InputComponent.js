import React, { useRef, useCallback, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import InputSingleActions from '../Input/InputSingleActions';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import useOnClickOutside from '../hooks/useOnClickOutside';
import TextInput from '../Input/TextInput';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .has-error': {
      borderColor: theme.palette.error.main
    }
  }
}));
const InputComponent = React.forwardRef(({ Component, label, onSave, onAbort, onChange, handleClickInside, disabled, autoSave, ...rest }, ref) => {

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
  const { clickedOutside, setClickedOutside, addEventListener, removeEventListener } = useOnClickOutside(inputContainerRef, true, disabled || !autoSave, handleSave);

  useWhyDidYouUpdate('Re', { Component, label, onSave, onAbort, onChange, handleClickInside, disabled, rest, inputRef, classes, inputActionsRef, inputContainerRef, error, clickedOutside });

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
    input: inputRef.current,
    setError
  }));

  const contentMemo = React.useMemo(() => (
    <Component
      ref={inputRef}
      label={label}
      className={clsx({ 'focus-content': !clickedOutside, 'has-error': error.hasError })}
      disabled={disabled}
      onClickInside={onClickInside}
      onChange={(e) => {
        if (onChange) {
          onChange(e, inputRef, error, setError);
        }
      }}
      {...rest}

    />
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [label, clickedOutside, disabled, error, rest]);

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
      {contentMemo}
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