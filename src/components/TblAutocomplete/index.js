import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import Popper from '@material-ui/core/Popper';

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
    <Popper placement='bottom-start' {...rest}>
      {children}
    </Popper>
  );
}

PopperComponent.propTypes = {
  children: PropTypes.any,
};

function TblAutocomplete(props) {
  const { required, label, placeholder, ...rest } = props;
  const [currentList, setCurrentList] = useState([]);
  const classes = useStyles();
  const inputRef = useRef();

  const renderInput = params => {
    params.inputProps.onFocus = () => {
      if (currentList.length > 0) {
        inputRef.current.setAttribute('readonly', true);
      } else {
        inputRef.current.removeAttribute('readonly');
      }
    }
    return <TextField inputRef={inputRef} {...params} placeholder={placeholder} variant='outlined' />;
  }

  const onChange = (event, value) => {
    setCurrentList((previousValue) => {
      inputRef.current.setAttribute('placeholder', '');
      inputRef.current.blur();
      return value;
    });
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
        popupIcon={<ExpandMoreIcon />}
        renderInput={renderInput}
        // ListboxComponent={ListboxComponent}
        debug={true}
        PopperComponent={PopperComponent}
        onChange={onChange}
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