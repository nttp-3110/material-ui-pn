import React from 'react';
import Select from 'react-select';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
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

function ClearIndicator(props) {
  return (
    <ClearIcon className={props.selectProps.classes.clearIcon} onClick={props.clearValue} />
  );
}

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

function Option(props) {
  const { isSelected } = props;
  return (
    <div className={props.selectProps.classes.menuItem}>
      <MenuItem
        selected={props.isSelected}
        component='div'
        {...props.innerProps}
      >
        <div className={props.selectProps.classes.checkbox}>
          <Checkbox
            color='primary'
            checked={isSelected}
            size='small'
          />
        </div>
        {props.children}
      </MenuItem>
    </div>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer} id='value-container'>
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  // console.log('props', props);
  // const valueContainerElement = document.getElementById('value-container');
  // const valueContainerWidth = valueContainerElement.offsetWidth;
  return (
    <Box ml={props.index === 0 ? 0 : 0.5}>
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
        cropWithEllipsis
        {...rest}
      />
    </div>
  );
}

export default React.memo(ReactSelect);