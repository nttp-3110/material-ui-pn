import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';

import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  optionItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    '&.multiple': {
      justifyContent: 'unset',
    },
    '& > span[class^="PrivateSwitchBase-"], & > span[class*=" PrivateSwitchBase-"]': {
      padding: '0 8px'
    }
  },
  optionContent: {
    fontSize: theme.fontSize.normal,
  },
  selectedTick: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: '24px',
    '&:before': {
      fontFamily: 'icomoon',
      color: theme.palette.secondary.main,
      content: '"\\e929"',
      fontSize: theme.fontSizeIcon.medium
    }
  },
}));

function Option({ multiple, option, selected }) {
  const classes = useStyles();

  const renderOption = useMemo(() => {
    if (multiple) {
      return (
        <React.Fragment>
          <Checkbox checked={selected} size='small' padding='0 9px' />
          <div className={classes.optionContent}>{option}</div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className={classes.optionContent}>{option}</div>
        {selected && <div className={classes.selectedTick} />}
      </React.Fragment>
    );
  }, [selected]);

  return (
    <div className={clsx(classes.optionItem, multiple && 'multiple')}>
      {renderOption}
    </div>
  );
}

Option.propTypes = {
  option: PropTypes.string,
  selected: PropTypes.bool
};

export default Option;
