import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';
import isEmpty from 'lodash/isEmpty';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Popper from '@material-ui/core/Popper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Option from './Option';
import Tag from './Tag';
import useStyles from './styles';

function PopperComponent(props) {
  const { children, ...rest } = props;

  // const [isOpen, setIsOpen] = useState(true);

  const onClickAway = evt => {
    // setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Popper placement='bottom-start' {...rest}>
        {children}
      </Popper>
    </ClickAwayListener>
  );
}

PopperComponent.propTypes = {
  children: PropTypes.any,
};

function TblAutocomplete({ required, isSearchable, multiple, label, placeholder, ...rest }) {
  const classes = useStyles();
  const inputRef = useRef();

  const isSingle = !!!multiple;
  const isMultiple = !!multiple;

  const renderTags = tags => (
    <div className={clsx(classes.wrapTags, multiple && 'search-box')}>
      {tags.map((e, ind) => <Tag key={ind} title={e.title} />)}
    </div>
  );

  const renderOption = (option, { selected }) => <Option multiple={isMultiple} option={option.title} selected={selected} />;

  const renderInput = props => {
    props.inputProps.onFocus = props.inputProps.onBlur = () => {
      if (!isSearchable) {
        inputRef.current.setAttribute('readonly', true);
      } else {
        inputRef.current.removeAttribute('readonly');
      }
    };
    return <TextField {...props} inputRef={inputRef} placeholder={placeholder} variant='outlined' />;
  };

  const onChange = (event, tags, action /* select-option, remove-option, clear */, value) => {
    if (isSingle) {
      if (tags) {
        inputRef.current.setAttribute('readonly', true);
      } else {
        inputRef.current.removeAttribute('readonly');
      }
    } else if (isMultiple && !isEmpty(tags)) {
      inputRef.current.style.display = 'none';
    } else {
      inputRef.current.style.display = 'block';
    }
  };

  const onClose = (evt, action) => {
    console.log('onClose ==> ', evt, action);
  };

  const onOpen = evt => {
    console.log('onOpen ==> ', evt);
  };

  return (
    <div className={classes.root}>
      <InputLabel required={required} className={classes.inputLabel}>
        <span>{label}</span>
      </InputLabel>
      <Autocomplete
        debug
        classes={classes}
        popupIcon={<ExpandMoreIcon />}
        PopperComponent={PopperComponent}
        renderTags={renderTags}
        renderInput={renderInput}
        renderOption={renderOption}
        onChange={onChange}
        onClose={onClose}
        onOpen={onOpen}
        disableCloseOnSelect={isMultiple}
        multiple={isMultiple}
        {...rest}
      />
    </div>
  );
}

TblAutocomplete.defaultProps = {
  required: false,
  isSearchable: true,
  multiple: false,
  label: '',
  placeholder: ''
};

TblAutocomplete.propTypes = {
  required: PropTypes.bool,
  error: PropTypes.bool,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.any,
  helperLabel: PropTypes.any,
  label: PropTypes.any,
  isSearchable: PropTypes.bool,
  inputProps: PropTypes.object
};

export default TblAutocomplete;