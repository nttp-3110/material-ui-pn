import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  root: {
    borderRadius: theme.spacing(1),
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    //Normal button
    minWidth: theme.spacing(10),
    margin: theme.spacing(1),
    padding: theme.spacing(1.25, 2),
    '&:hover': {
      cursor: 'pointer'
    },
    '&:focus': {
      outline: 'none'
    },
    '& .label': {
      fontSize: theme.fontSize.body1,
      color: theme.openColors.white,
      fontWeight: '500',
      lineHeight: '24px'
    },
    '& .loader': {
      marginRight: theme.spacing(1.25),
      border: '2px solid #1A7AE6',
      borderRadius: '50%',
      borderTop: '2px solid transparent',
      width: theme.spacing(2),
      height: theme.spacing(2),
      animation: '$spin 2s linear infinite'
    },
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
    // color: mainColors.
    '&:hover': {
      backgroundColor: theme.mainColors.primary[2]
    },
    '&:active': {
      backgroundColor: '#1B5198'
    },
    '&.loading': {
      backgroundColor: theme.mainColors.primary[5]
    }
  },
  outline: {
    backgroundColor: theme.openColors.white,
    border: '1px solid #1A7AE6',
    '& .label': {
      color: theme.mainColors.primary[3],
    },
    '&:hover': {
      backgroundColor: theme.mainColors.primary[2],
      '& .label': {
        color: theme.openColors.white,
      },
    },
    '&:active': {
      backgroundColor: '#1B5198',
      '& .label': {
        color: theme.openColors.white,
      },
    },
    '&.loading': {
      border: `1px solid ${theme.mainColors.primary[5]}`,
      '& .label': {
        color: theme.mainColors.primary[5],
      },
    }
  },
  subtle: {
    backgroundColor: theme.openColors.white,
    '& .label': {
      color: '#1A7AE6',
    },
    '&:hover': {
      backgroundColor: theme.mainColors.primary[6]
    },
    '&:active': {
      backgroundColor: theme.mainColors.primary[5]
    },
    '&.loading': {
      '& .label': {
        color: theme.mainColors.primary[5],
      },
    }
  },
  ghost: {
    backgroundColor: theme.openColors.white,
    '& .label': {
      color: theme.mainColors.neutral[0]
    },
    '&:hover': {
      backgroundColor: theme.openColors.gray[2],
      border: `1px solid ${theme.openColors.gray[5]}`
    },
    '&:active': {
      backgroundColor: theme.openColors.gray[3]
    },
    '&.loading': {
      '& .label': {
        color: theme.openColors.gray[5],
      },
      '& .loader': {
        borderColor: '#212529',
        borderTopColor: 'transparent'
      }
    }
  },
  danger: {
    backgroundColor: theme.openColors.red[8],
    '&:active': {
      backgroundColor: theme.openColors.red[9]
    },
    '&.loading': {
      '& .label': {
        color: theme.openColors.white,
      },
      '& .loader': {
        borderColor: theme.openColors.white,
        borderTopColor: 'transparent'
      }
    }
  },
  inverse: {
    backgroundColor: theme.openColors.white,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.16)',
    '& .label': {
      color: theme.mainColors.primary[3]
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.mainColors.primary[2],
      '& .label': {
        color: theme.openColors.white,
      },
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: theme.mainColors.primary[2],
      '& .label': {
        color: theme.openColors.white,
      },
    },
    '&.loading': {
      '& .label': {
        color: theme.mainColors.primary[5],
      },
    }
  },
  disabled: {
    backgroundColor: theme.openColors.gray[1],
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.openColors.gray[1],
      border: 'none',
      '& .label': {
        color: theme.openColors.gray[5]
      }
    },
    '& .label': {
      color: theme.openColors.gray[5]
    }
  },
}));

export default useStyles;