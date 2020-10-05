import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: '500',
    boxShadow: 'none',
  },
  sizeLarge: {
    fontSize: '16px',
    lineHeight: '24px',
    minWidth: '140px',
    minHeight: '48px'
  },
  disabled: {
    color: '#ADB5BD !important',
    backgroundColor: '#F1F3F5 !important'
  },
  contained: {
    backgroundColor: '#1A7AE6',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#4792EB'
    },
    '&:active': {
      backgroundColor: '#2268C3'
    }
  },
  outlined: {
    border: '1px solid #1A7AE6',
    backgroundColor: '#FFFFFF',
    color: '#1A7AE6',
    '&:hover': {
      backgroundColor: '#4792EB',
      color: '#FFFFFF'
    },
    '&:active': {
      backgroundColor: '#2268C3',
      color: '#FFFFFF'
    }
  },
  text: {
    color: '#1A7AE6',
    '&:hover': {
      backgroundColor: '#EBF1F9'
    },
    '&:active': {
      backgroundColor: '#ADC8EB'
    }
  },
  '.ghost': {
    '& .MuiButton-text': {
      color: '#212529',
      '&:hover': {
        backgroundColor: '#E9ECEF',
        border: '1px solid #ADB5BD'
      },
      '&:active': {
        backgroundColor: '#ADC8EB'
      }
    },
  },
}));

export default useStyles;