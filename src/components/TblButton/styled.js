import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    border: 'none',
    //Normal button
    minWidth: theme.spacing(10),
    margin: theme.spacing(1),
    padding: theme.spacing(1.25, 2),
    '&:hover': {
      cursor: 'pointer'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  //Style for size
  largeSize: {
    padding: theme.spacing(2, 3)
  },
  smallSize: {
    padding: theme.spacing(0.5, 1.5)
  },
  //Style for shape
  solid: {
    backgroundColor: '#1A7AE6',
    '&:hover': {
      backgroundColor: '#4792EB'
    },
    '&:active': {
      backgroundColor: '#2268C3'
    }
  },
  outline: {
    backgroundColor: theme.openColors.white,
  },
  label: {
    fontSize: theme.fontSize.button,
    color: theme.openColors.white,
    fontWeight: '500',
    lineHeight: '24px'
  }
}));

export default useStyles;