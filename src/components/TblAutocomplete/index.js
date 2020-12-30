import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import Popper from '@material-ui/core/Popper';

import Option from './Option';
import useStyles from './styles';

// function ListboxComponent(props) {
//   const {children, ...rest} = props;
//   return (
//     <PerfectScrollbar>
//       <ul {...rest}>
//         {children}
//       </ul>
//     </PerfectScrollbar>
//   );
// };

// ListboxComponent.propTypes = {
//   children: PropTypes.any,
// };

function PopperComponent(props) {
  const { children, ...rest } = props;
  return (
    <div placement='bottom-start' {...rest}>
      {children}
    </div>
  );
}

PopperComponent.propTypes = {
  children: PropTypes.any,
};

function TblAutocomplete({ required, isSearchable, multiple, label, placeholder, ...rest }) {
  const classes = useStyles();
  const inputRef = useRef();

  const isSingle = !multiple;
  const isMultiple = !!multiple;

  const renderOption = (option, { selected }) => <Option multiple={isMultiple} option={option.title} selected={selected} />;

  const renderInput = props => {
    props.inputProps.onFocus = props.inputProps.onBlur = () => {
      if (!isSearchable) {
        inputRef.current.setAttribute('readonly', true);
      } else {
        inputRef.current.removeAttribute('readonly');
      }
<<<<<<< Updated upstream
    }
    return <TextField inputRef={inputRef} {...params} placeholder={placeholder} variant='outlined' />;
  }

  const onChange = (event, value) => {
    setCurrentList((previousValue) => {
      inputRef.current.setAttribute('placeholder', '');
      inputRef.current.blur();
      return value;
    });
=======
    };
    return <TextField {...props} inputRef={inputRef} placeholder={placeholder} variant='outlined' />;
  }

  const onChange = (event, tags, action /* select-option, remove-option, clear */, value) => {
    console.log(tags, action /* select-option, remove-option, clear */, value);
    if (isSingle) {
      if (tags) {
        inputRef.current.setAttribute('readonly', true);
      } else {
        inputRef.current.removeAttribute('readonly');
      }
    }
    // const currentTags = tags?.length || 0;

    // inputRef.current.setAttribute(tagItems, currentTags);

    // if (currentTags === 0) {
    //   inputRef.current.removeAttribute('readonly');
    //   inputRef.current.setAttribute('placeholder', placeholder);
    //   inputRef.current.focus();
    // } else {
    //   inputRef.current.setAttribute('placeholder', '');
    //   inputRef.current.blur();
    // }
  }

  const onClose = (a, b, c, d) => {
    // console.log(a, b, c, d);
>>>>>>> Stashed changes
  }

  return (
    <div className={classes.root}>
      <InputLabel required={required} className={classes.inputLabel}>
        <span>
          {label}
        </span>
      </InputLabel>
      <Autocomplete
        classes={classes}
        disableCloseOnSelect={isMultiple}
        popupIcon={<ExpandMoreIcon />}
<<<<<<< Updated upstream
        renderInput={renderInput}
        // ListboxComponent={ListboxComponent}
        debug={true}
=======
>>>>>>> Stashed changes
        PopperComponent={PopperComponent}
        renderInput={renderInput}
        renderOption={renderOption}
        onChange={onChange}
<<<<<<< Updated upstream
=======
        onClose={onClose}
        multiple={isMultiple}
>>>>>>> Stashed changes
        {...rest}
      />
    </div>
  );
}

TblAutocomplete.propTypes = {
  required: PropTypes.bool,
  error: PropTypes.bool,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.any,
  helperLabel: PropTypes.any,
  label: PropTypes.any,
};

export default TblAutocomplete;