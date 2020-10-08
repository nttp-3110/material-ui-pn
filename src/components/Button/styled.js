import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '8px',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: '500',
    '& .MuiButton-root': {
      boxShadow: 'none',
      margin: '8px',
      padding: '10px 16px',
      minWidth: '80px',
    },
    '&.loading': {
      '& .MuiButton-contained': {
        backgroundColor: '#ADC8EB',
        color: '#FFFFFF',
        boxShadow: 'none',
        '& .MuiCircularProgress-root': {
          color: '#1A7AE6'
        },
      },
      '& .MuiButton-outlined': {
        color: '#ADC8EB',
        '&:hover': {
          backgroundColor: '#FFFFFF'
        },
        '& .MuiCircularProgress-root': {
          color: '#1A7AE6'
        },
      },
      '& .MuiButton-text': {
        color: '#ADC8EB',
        '&:hover': {
          backgroundColor: '#FFFFFF'
        },
        '& .MuiCircularProgress-root': {
          color: '#1A7AE6'
        },
      },
      '&.ghost .MuiButton-text': {
        color: '#ADB5BD',
        '&:hover': {
          border: 'none',
        },
        '& .MuiCircularProgress-root': {
          color: '#212529',
        },
      },
      '&.danger .MuiButton-contained': {
        backgroundColor: '#E03131',
        '& .MuiCircularProgress-root': {
          color: '#FFFFFF'
        },
      },
      '&.inverse .MuiButton-outlined': {
        color: '#ADC8EB;',
        '&:hover': {
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.16)',
        },
        '&:active': {
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.16)',
        },
        '& .MuiCircularProgress-root': {
          color: '#1A7AE6'
        }
      },
    },
    '&.ghost .MuiButton-text': {
      color: '#212529',
      '&:hover': {
        backgroundColor: '#E9ECEF',
        border: '1px solid #ADB5BD'
      },
      '&:active': {
        backgroundColor: '#DEE2E6',
        border: '1px solid #ADB5BD'
      }
    },
    '&.danger .MuiButton-contained': {
      backgroundColor: '#E03131',
      '&:hover': {
        backgroundColor: '#F03E3E',
      },
      '&:active': {
        backgroundColor: '#C92A2A'
      }
    },
    '&.inverse .MuiButton-outlined': {
      color: '#1A7AE6',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.16)',
      border: 'none',
      '&:hover': {
        backgroundColor: '#2268C3',
        color: '#FFFFFF',
        boxShadow: 'none'
      },
      '&:active': {
        backgroundColor: '#2268C3',
        color: '#FFFFFF',
        boxShadow: 'none'
      },
      '&.Mui-disabled': {
        boxShadow: 'none'
      }
    },
  },
  disabled: {
    color: '#ADB5BD !important',
    backgroundColor: '#F1F3F5 !important',
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
  sizeSmall: {
    padding: '4px 12px',
    minWidth: '80px'
  },

  sizeLarge: {
    padding: '16px 24px',
    minWidth: '80px'
  }
}));

export default useStyles;