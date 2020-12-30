import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import Popper from '@material-ui/core/Popper';

import useStyles from './styles';

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

const tagItems = 'tag-items';

function TblAutocomplete({ required, isSearchable, multiple, label, placeholder, ...rest }) {
  const classes = useStyles();
  const inputRef = useRef();

  // const renderTags = (tags, getTagProps) => {
  //   return (
  //     <div>
  //       {tags.map((option, index) => <Chip label={option.title} {...getTagProps({ index })} />)}
  //     </div>
  //   );
  // };

  const renderInput = params => {
    params.inputProps.onFocus = params.inputProps.onBlur = () => {
      const tags = +inputRef.current.getAttribute(tagItems);
      if (!isSearchable || tags > 0) {
        inputRef.current.setAttribute('readonly', true);
      } else {
        inputRef.current.removeAttribute('readonly');
      }
    };
    return <TextField inputRef={inputRef} {...params} placeholder={placeholder} variant='outlined' />;
  };

  const onChange = (event, tags, action /* select-option, remove-option, clear */, value) => {
    const currentTags = tags?.length || 0;

    inputRef.current.setAttribute(tagItems, currentTags);

    if (currentTags === 0) {
      inputRef.current.removeAttribute('readonly');
      inputRef.current.setAttribute('placeholder', placeholder);
      inputRef.current.focus();
    } else {
      inputRef.current.setAttribute('placeholder', '');
      inputRef.current.blur();
    }
  };

  const getLimitTagsText = e => {
    console.log(e, ' ===> event getLimitTagsText ');
  };

  return (
    <div className={classes.root}>
      <InputLabel required={required} className={classes.inputLabel}>
        <span>{label}</span>
      </InputLabel>
      <Autocomplete
        classes={classes}
        popupIcon={<ExpandMoreIcon />}
        renderInput={renderInput}
        // renderTags={renderTags}
        debug={true}
        PopperComponent={PopperComponent}
        onChange={onChange}
        multiple={multiple}
        getLimitTagsText={getLimitTagsText}
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
  isSearchable: PropTypes.bool
};

export default TblAutocomplete;