import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tagItem: {
    display: 'inline-flex',
    flexFlow: 'row',
    alignItems: 'center',
    fontSize: theme.fontSize.normal,
    color: theme.openColors.gray[9],
    margin: theme.spacing(0.25),
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    borderRadius: theme.spacing(0.5),
    background: theme.openColors.gray[2],
    '& span.icon-icn_close': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: theme.fontSize.medium,
      marginLeft: theme.spacing(0.5)
    }
  }
}));

function Tag({ title, onClose }) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.tagItem)}>
      {title}
      {onClose && <span className='icon-icn_close' onClick={onClose} />}
    </div>
  );
}

Tag.propTypes = {
  option: PropTypes.string,
  selected: PropTypes.bool
};

export default Tag;
