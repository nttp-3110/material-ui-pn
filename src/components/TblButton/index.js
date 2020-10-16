import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import ThemeContainer from './ThemeContainer';
import useStyles from './styled';

function TblButton(props) {
  const classes = useStyles();
  const { label, size, type, disabled, isShowLoading } = props;
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
    // <ThemeContainer>
    <button
      className={clsx(classes.root, {
        [classes.largeSize]: size === 'large',
        [classes.smallSize]: size === 'small',
        [classes.disabled]: disabled,
        [classes[type]]: !!type,
      })}
    >
      {isShowLoading && <div className='loader' />}
      <div className='label'>{label}</div>
    </button>
    // </ThemeContainer>
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
