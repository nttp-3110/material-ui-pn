import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import useStyles from './styled';

function Button(props) {
  const classes = useStyles();
  const { label, size } = props;
  
  return (
    <button 
      // className={clsx({ `${classes[size]}`: !!size })}
    >
      <div className='label'>{label}</div>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.
};

export default Button;
