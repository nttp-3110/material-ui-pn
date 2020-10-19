import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import useStyles from './styled';

function TblButton(props) {
  const classes = useStyles();
  const { label, size, type, disabled, isShowLoading } = props;
  return (
    <button
      className={clsx(classes.root, {
        [classes.largeSize]: size === 'large',
        [classes.smallSize]: size === 'small',
        [classes.disabled]: disabled,
        [classes[type]]: !!type,
        'loading': isShowLoading
      })}
    >
      {isShowLoading && <div className='loader' />}
      <div className='label'>{label}</div>
    </button>
  );
}

TblButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isShowLoading: PropTypes.bool
};

TblButton.defaultProps = {
  disabled: false,
  type: 'solid',
  size: 'normal'
};

export default TblButton;
