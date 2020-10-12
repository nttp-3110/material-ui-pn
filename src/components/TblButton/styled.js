import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  label: {
   fontSize: theme.fontSize.button,
   color: theme.openColors.white,
  }
}));

export default useStyles;