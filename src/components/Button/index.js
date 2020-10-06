import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

import useStyles from './styled';

export function TblButton(props) {
  const classes = useStyles();
  const { children, isShowCircularProgress, className, ...rest } = props;
  return (
    <div className={clsx(classes.root, { [className]: !!className, 'loading': isShowCircularProgress })}>
      <Button classes={classes} {...rest}>
        {!!isShowCircularProgress &&
          <Box mr={1.25}>
            <CircularProgress size={16} color='inherit' />
          </Box>
        }
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

