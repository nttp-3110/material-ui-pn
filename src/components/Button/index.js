import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

import useStyles from './styled';

export function TblButton(props) {
  const classes = useStyles();
  const [variant, setVariant] = useState('text');
  const { children, isShowCircularProgress, className, ...rest } = props;

  useEffect(() => {
    let newVariant = 'text';
    switch (className) {
      case 'solid':
      case 'danger':
        newVariant = 'contained';
        break;
      case 'outline':
      case 'inverse':
        newVariant = 'outlined';
        break;
      default:
        newVariant = 'text';
        break;
    }
    if (newVariant !== variant) {
      setVariant(newVariant);
    }
  }, [className, variant]);
  return (
    <div className={clsx(classes.root, { [className]: !!className, 'loading': isShowCircularProgress })}>
      <Button classes={classes} variant={variant} {...rest}>
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

