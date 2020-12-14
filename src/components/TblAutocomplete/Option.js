import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

function Option({option, selected}){
  const classes = useStyles();
  return(
    <React.Fragment>
      <div className={classes.optionContent}>{option}</div>
      {selected && <div className={classes.selectedTick} />}
    </React.Fragment>
  );
}

Option.propTypes = {
  option: PropTypes.string,
  selected: PropTypes.bool
};

export default React.memo(Option);
