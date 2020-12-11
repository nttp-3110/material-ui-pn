import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SvgIcon from '@material-ui/core/SvgIcon';
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

class EditorButton extends React.Component {
  render() {
    const { classes, handleClick, checked, disabled, svgIconComponent } = this.props;

    return (
      <span className={`${classes.root} ${disabled ? classes.rootDisabled : ''}`}>
        <button
          onClick={handleClick}
          className={clsx(classes.button, { [classes.btnChecked]: checked, [classes.btnNormal]: !disabled && !checked, [classes.btnDisabled]: disabled })}>
          <SvgIcon component={svgIconComponent}
            className={clsx(classes.svgIcon, { [classes.iconChecked]: checked })}
          ></SvgIcon>
        </button>
      </span>
    );
  }
}
export default withStyles(styles)(EditorButton);