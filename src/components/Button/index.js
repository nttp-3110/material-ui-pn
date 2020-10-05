import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import useStyles from './styled';

export function TblButton(props) {
  const classes = useStyles();
  const { children, isShowCircularProgress, className, ...rest } = props;
  return (
    <div className={className ?? ''}>
      <Button classes={classes} {...rest}>
        {!!isShowCircularProgress && <CircularProgress size={24} color='inherit' />}
        {children}
      </Button>
    </div>
  );
}

TblButton.propTypes = {
  isShowCircularProgress: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string
};

