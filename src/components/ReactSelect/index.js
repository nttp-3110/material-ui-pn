import React from 'react';
import Select from 'react-select';
import clsx from 'clsx';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ClearIcon from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';

import useStyles from './styles';

function DropdownIndicator(props) {
  const { selectProps: { menuIsOpen } } = props;
  if (menuIsOpen) {
    return <ExpandLessIcon className={props.selectProps.classes.expandIcon} />;
  }
  return (
    <ExpandMoreIcon className={props.selectProps.classes.expandIcon} />
  );
}

DropdownIndicator.propTypes = {
  selectProps: PropTypes.object,
  menuIsOpen: PropTypes.bool
};

function ClearIndicator(props) {
  return (
    <ClearIcon className={props.selectProps.classes.clearIcon} onClick={props.clearValue} />
  );
}

ClearIndicator.propTypes = {
  selectProps: PropTypes.object
};

// function MenuList(props) {
//   return (
//     <div className={props.selectProps.classes.menuList}>
//       <PerfectScrollbar>{props.children}</PerfectScrollbar>
//     </div>
//   );
// }

function Menu(props) {
  return (
    <Paper
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.any
};

function Option(props) {
  const { isSelected, isMulti } = props;
  return (
    <div className={clsx(props.selectProps.classes.menuItem, {
      [props.selectProps.classes.singleSelect]: !isMulti
    })}>
      <MenuItem
        selected={isSelected}
        component='div'
        {...props.innerProps}
      >
        {isMulti &&
          <div className={props.selectProps.classes.checkbox}>
            <Checkbox
              color='primary'
              checked={isSelected}
              size='small'
            />
          </div>
        }
        <div className='option-content'>{props.children}</div>
        {!isMulti && isSelected &&
          <div className='selected-tick'></div>
        }
      </MenuItem>
    </div>
  );
}

Option.propTypes = {
  selectProps: PropTypes.object,
  innerProps: PropTypes.object,
  children: PropTypes.any,
  isSelected: PropTypes.bool,
  isMulti: PropTypes.bool
};

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer} id='value-container'>
      {props.children}
    </div>
  );
}

ValueContainer.propTypes = {
  selectProps: PropTypes.object,
  children: PropTypes.any
};

function MultiValue(props) {
  return (
    <Box ml={props.index === 0 ? 0 : 0.5} maxWidth='100%' display='inline-flex'>
      <Chip
        tabIndex={-1}
        label={props.children}
        className={clsx(props.selectProps.classes.chip, {
          [props.selectProps.classes.chipFocused]: props.isFocused
        })}
      />
    </Box>
  );
}

MultiValue.propTypes = {
  index: PropTypes.number,
  selectProps: PropTypes.object,
  children: PropTypes.any,
  isFocused: PropTypes.bool
};

const components = {
  // MenuList,
  Option,
  MultiValue,
  DropdownIndicator,
  ValueContainer,
  Menu,
  ClearIndicator
};

function ReactSelect(props) {
  const classes = useStyles();
  const { required, label, ...rest } = props;
  return (
    <div className={classes.root}>
      <InputLabel required={required} className={classes.inputLabel}>
        <span>
          {label}
        </span>
      </InputLabel>
      <Select
        classes={classes}
        components={components}
        closeMenuOnSelect={false}
        {...rest}
      />
    </div>
  );
}

ReactSelect.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string
};

export default React.memo(ReactSelect);