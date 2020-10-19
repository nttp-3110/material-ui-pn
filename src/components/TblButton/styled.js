import { makeStyles } from '@material-ui/core/styles';

import { default as openColors } from '../../themes/open-color.json'; //NOTE: Use open color at https://yeun.github.io/open-color/
import mainColors from '../../themes/colors'; //NOTE: This is colors of our project
import { fontSize, 
  // fontSizeIcon, fontWeight 
} from '../../themes/fontSize'; //NOTE: This is colors of our project

const useStyles = makeStyles((theme) => { console.log('theme',theme);return{
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
    padding: '10px 16px',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:focus': {
      outline: 'none'
    },
    '& .label': {
      fontSize: fontSize.body1,
      color: openColors.white,
      fontWeight: '500',
      lineHeight: '24px'
    },
    '& .loader': {
      marginRight: '10px',
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
    padding: '16px 24px'
  },
  smallSize: {
    padding: '4px 12px'
  },
  //Style for shape
  solid: {
    backgroundColor: '#1A7AE6',
    // color: mainColors.
    '&:hover': {
      backgroundColor: mainColors.primary[2]
    },
    '&:active': {
      backgroundColor: '#1B5198'
    },
    '&.loading': {
      backgroundColor: mainColors.primary[5]
    }
  },
  outline: {
    backgroundColor: openColors.white,
    border: '1px solid #1A7AE6',
    '& .label': {
      color: mainColors.primary[3],
    },
    '&:hover': {
      backgroundColor: mainColors.primary[2],
      '& .label': {
        color: openColors.white,
      },
    },
    '&:active': {
      backgroundColor: '#1B5198',
      '& .label': {
        color: openColors.white,
      },
    },
    '&.loading': {
      border: `1px solid ${mainColors.primary[5]}`,
      '& .label': {
        color: mainColors.primary[5],
      },
    }
  },
  subtle: {
    backgroundColor: openColors.white,
    '& .label': {
      color: '#1A7AE6',
    },
    '&:hover': {
      backgroundColor: mainColors.primary[6]
    },
    '&:active': {
      backgroundColor: mainColors.primary[5]
    },
    '&.loading': {
      '& .label': {
        color: mainColors.primary[5],
      },
    }
  },
  ghost: {
    backgroundColor: openColors.white,
    '& .label': {
      color: mainColors.neutral[0]
    },
    '&:hover': {
      backgroundColor: openColors.gray[2],
      border: `1px solid ${openColors.gray[5]}`
    },
    '&:active': {
      backgroundColor: openColors.gray[3]
    },
    '&.loading': {
      '& .label': {
        color: openColors.gray[5],
      },
      '& .loader': {
        borderColor: '#212529',
        borderTopColor: 'transparent'
      }
    }
  },
  danger: {
    backgroundColor: openColors.red[8],
    '&:active': {
      backgroundColor: openColors.red[9]
    },
    '&.loading': {
      '& .label': {
        color: openColors.white,
      },
      '& .loader': {
        borderColor: openColors.white,
        borderTopColor: 'transparent'
      }
    }
  },
  inverse: {
    backgroundColor: openColors.white,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.16)',
    '& .label': {
      color: mainColors.primary[3]
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: mainColors.primary[2],
      '& .label': {
        color: openColors.white,
      },
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: mainColors.primary[2],
      '& .label': {
        color: openColors.white,
      },
    },
    '&.loading': {
      '& .label': {
        color: mainColors.primary[5],
      },
    }
  },
  disabled: {
    backgroundColor: openColors.gray[1],
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: openColors.gray[1],
      border: 'none',
      '& .label': {
        color: openColors.gray[5]
      }
    },
    '& .label': {
      color: openColors.gray[5]
    }
  },
};});

export default useStyles;