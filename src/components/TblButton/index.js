import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ThemeContainer from './ThemeContainer';
import useStyles from './styled';

function TblButton(props) {
  const classes = useStyles();
  const { label, size, type } = props;
  // const [shape, setShape] = useState('text');

  // useEffect(() => {
  //   let newShape = 'text';
  //   switch(type){
  //     case 'solid':
  //     case 'danger':
  //       newShape = 'container';
  //       break;
  //     case 'outline':
  //     case 'inverse':
  //       newShape = 'outline';
  //       break;
  //     case 'subtle':
  //     case 'ghost':
  //       newShape = 'text';
  //       break;
  //     default:
  //       break;
  //   }
  //   if (newShape !== shape){
  //     setShape(newShape);
  //   }
  // }, [shape, type]);
  return (
    <ThemeContainer>
       <button
      // className={clsx(classes.root, {
      //   [classes.largeSize]: size === 'large',
      //   [classes.smallSize]: size === 'small',
      //   [classes[type]]: !!type,
      // })}
      >
        {/* <div className={classes.label}>{label}</div> */}
        {label}
      </button>
    </ThemeContainer>
  );
}

TblButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string
};

export default TblButton;
