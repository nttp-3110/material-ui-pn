import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import get from 'lodash/get';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import Chip from '@material-ui/core/Chip';

import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';

import isEmpty from 'lodash/isEmpty';
import { isNil } from 'lodash';
import useStyles from './styles';
// import find from 'lodash/find';

TblSelect.propTypes = {
  required: PropTypes.bool,
  keyValue: PropTypes.string,
  keyDisplay: PropTypes.string,
  error: PropTypes.bool,
  multiple: PropTypes.bool,
  labelField: PropTypes.any,
  errorMessage: PropTypes.any,
  helperLabel: PropTypes.any,
  children: PropTypes.any,
  label: PropTypes.any,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  spacing: PropTypes.any,
  classNameRoot: PropTypes.any,
  classNameList: PropTypes.any
};

TblSelect.defaultProps = {
  required: false,
  error: false,
  label: '',
  helperLabel: '',
  spacing: false
};

export default function TblSelect(props) {
  const classes = useStyles();
  const {
    error,
    helperLabel,
    required,
    label,
    children,
    errorMessage,
    placeholder,
    multiple,
    labelField,
    value,
    spacing,
    classNameRoot,
    classNameList,
    ...rest
  } = props;

  const renderValue = (selected) => {
    if (selected.length === 0) {
      return placeholder;
    }

    // const convertValue =  selected.map(value => {
    //   const findLabel = find(children, item => item?.props?.value === value);
    //   if(findLabel) return findLabel?.props?.children;
    //   return '';
    // } );
    // return convertValue.join(', ');
    const { keyDisplay, keyValue } = props;
    return selected.map((item, index) => {
      if (keyDisplay && keyValue) {
        const display = get(item, keyDisplay);
        const key = get(item, keyValue);
        return <Chip clickable key={key} label={display} />;
      }
      return <Chip key={index} label={item} />;
    });
  };
  return (
    <div
      className={`TblSelect-root ${classes.root} ${classNameRoot} ${clsx({
        [classes.error]: error,
        [classes.placeholder]: multiple
          ? isEmpty(value)
          : isEmpty(toString(value)),
      })} ${clsx({ [classes.space]: spacing })}`}
    >
      <InputLabel required={required} className={classes.inputLabel}>
        <span>
          {label}{' '}
          {helperLabel && (
            <Tooltip title={helperLabel} placement='top' arrow>
              <HelpOutlineRoundedIcon />
            </Tooltip>
          )}
        </span>
      </InputLabel>
      <Select
        displayEmpty={!!placeholder}
        IconComponent={ExpandMoreIcon}
        inputProps={{ 'aria-label': 'Without label' }}
        variant='outlined'
        value={isNil(value) ? (multiple ? [''] : '') : value} // to display placeholder
        multiple={multiple}
        renderValue={multiple && !!placeholder ? renderValue : null}
        MenuProps={{
          classes: { list: `${classes.menu} ${classNameList}`, paper: `${classes.menuPaper} scrollbar` },
          getContentAnchorEl: null,
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
        }}
        {...rest}
      >
        {!!placeholder && (
          <MenuItem
            className={classes.emptyItem}
            disabled
            value={multiple ? [''] : ''}
          >
            {placeholder}
          </MenuItem>
        )}
        {children}
      </Select>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </div>
  );
}
