import React from 'react';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import useStyles from './styles';

function SelectButton(props) {
  const classes = useStyles();
  const { children, classNameList, ...rest } = props;
  return (
    <div className={classes.root}>
      <Select
        input={<OutlinedInput />}
        MenuProps={{
          classes: { list: `${classes.menu} ${classNameList}`, paper: classes.menuPaper },
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
        // open={true}
        {...rest} 
      >
        {children}
      </Select>
    </div>
  );
}

SelectButton.propTypes ={
  children: PropTypes.any,
  classNameList: PropTypes.string
};

export default React.memo(SelectButton);