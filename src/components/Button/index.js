import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import useStyles from './styled';

export function TblButton(props) {
  const classes = useStyles();
  const { children, isShowCircularProgress, ...rest } = props;
  return (
    <Button classes={classes} {...rest}>
      {!!isShowCircularProgress ? <CircularProgress size={24} color='inherit'/> : children}
    </Button>
  );
}

TblButton.propTypes = {
  isShowCircularProgress: PropTypes.bool,
  children: PropTypes.any
};

