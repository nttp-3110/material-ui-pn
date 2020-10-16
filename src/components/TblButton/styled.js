import { makeStyles } from '@material-ui/core/styles';

import { default as openColors } from '../../themes/open-color.json'; //NOTE: Use open color at https://yeun.github.io/open-color/
import mainColors from '../../themes/colors'; //NOTE: This is colors of our project
import { fontSize, fontSizeIcon, fontWeight } from '../../themes/fontSize'; //NOTE: This is colors of our project

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '8px',
    border: 'none',
    //Normal button
    minWidth: '80px',
    margin: '8px',
    padding: '10px 16px',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:focus': {
      outline: 'none'
    },
    '& .label': {
      fontSize: fontSize.button,
      color: openColors.white,
      fontWeight: '500',
      lineHeight: '24px'
    },
    '& .loader': {
      border: '16px solid #f3f3f3',
      borderRadius: '50%',
      borderTop: '16px solid #3498db',
      width: '120px',
      height: '120px',
      animation: 'spin 2s linear infinite'
    }
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
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
    }
  },
  danger: {
    backgroundColor: openColors.red[8],
    '&:active': {
      backgroundColor: openColors.red[9]
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
}));

export default useStyles;