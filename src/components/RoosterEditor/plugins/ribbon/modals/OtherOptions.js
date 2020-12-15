import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import RibbonButton from '../RibbonButton';
import EditorButton from '../EditorButton';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  editorPopper: {
    zIndex: 1,
    '&:focus, & .MuiPaper-root:focus, & .MuiList-root:focus': {
      outline: 'none'
    }

  },
  rootDisabled: {
    cursor: 'default',
    opacity: 0.5
  }
}));

export default function OtherOptions({ buttons, IconButton, plugin, format, onClicked, disabled, title, ...rest }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = React.useCallback(() => {
    if (disabled) {
      return;
    }
    setOpen(!open);
  }, [disabled, open]);

  const handleClose = (event) => {
    if (disabled) {
      return;
    }
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (disabled) {
      return;
    }
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div
      ref={anchorRef}
      className={`${classes.root} ${open ? 'editor-selected' : ''} ${disabled ? classes.rootDisabled : classes.rootNormal}`}
      onClick={handleToggle}>
      <EditorButton
        title={title}
        disabled={disabled}
        svgIconComponent={IconButton}
      />
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.editorPopper}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', zIndex: 1 }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                  {Object.keys(buttons).map(key => (
                    <RibbonButton
                      key={key}
                      plugin={plugin}
                      format={format}
                      button={buttons[key]}
                      onClicked={onClicked}
                    />
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
