import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import { ReactComponent as IcnMore } from './images/icn_more.svg';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'visible',
  },
  rootDisabled: {
    opacity: '0.4'
  },
  button: {
    borderWidth: 0,
    borderRadius: 8,
    margin: theme.spacing(0.25, 0.5),
    padding: 4,
    backgroundColor: theme.openColors.gray[0],
    cursor: 'pointer',
    width: 32,
    height: 32,
    '&:focus': {
      outline: 'none'
    }
  },
  btnNormal: {
    '&:hover': {
      backgroundColor: theme.openColors.gray[3],
      '& path': {
        fill: theme.openColors.gray[8]
      }
    }
  },
  btnDisabled: {
    cursor: 'default'
  },

  btnChecked: {
    backgroundColor: theme.customColors.primary1.light[3],
    '& < svg < path': {
      fill: theme.customColors.primary1.main
    },
    '&:hover': {
      backgroundColor: theme.customColors.primary1.light[3],
      '& path': {
        fill: theme.customColors.primary1.main
      }
    },
  },
  svgIcon: {
    fontSize: 20,
    height: 20,
    width: 20,
    '& path': {
      fill: theme.openColors.gray[8]
    }
  },
  iconChecked: {
    '& path': {
      fill: theme.customColors.primary1.main
    }
  },

});

const useStylesTooltip = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: '12px'
  },
}));

function CustomTooltip(props) {
  const classes = useStylesTooltip();

  return <Tooltip arrow classes={classes} {...props} />;
}
const EditorButton = ({ classes, className, handleClick, checked, disabled, svgIconComponent, title, ...rest }) => {
  return (
    <span className={clsx(classes.root, className, { [classes.rootDisabled]: disabled })}>
      <CustomTooltip title={title || ''}>
        <button
          onClick={handleClick}
          className={clsx(classes.button, { [classes.btnChecked]: checked, [classes.btnNormal]: !disabled && !checked, [classes.btnDisabled]: disabled })}
          {...rest}
        >
          <SvgIcon component={svgIconComponent}
            className={clsx(classes.svgIcon, { [classes.iconChecked]: checked })}
          ></SvgIcon>
        </button>
      </CustomTooltip>
    </span>
  );
};
EditorButton.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.any,
  handleClick: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  svgIconComponent: PropTypes.any,
  title: PropTypes.string
};
EditorButton.defaultProps = {
  classes: {},
  className: '',
  handleClick: () => { },
  checked: false,
  disabled: false,
  svgIconComponent: IcnMore,
  title: ''
};
export default withStyles(styles)(EditorButton);