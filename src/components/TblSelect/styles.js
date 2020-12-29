import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      width: '100%',
      borderRadius: theme.spacing(1),
      color: theme.mainColors.primary1[0],
      lineHeight: 'normal',
      background: theme.openColors.white,
      '& .MuiSelect-select': {
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.mainColors.primary1[0]
      }
    },
    '& .MuiSelect-root': {
      // borderRadius: theme.spacing(1),
      padding: theme.spacing(1.5, 4, 1.5, 1),
      fontSize: theme.fontSize.normal,
      height: '1.1876em', // because default height of inputText so set height for select
      '& .menu-content': {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    },
    '& .MuiSelect-outline': {
      borderColor: theme.mainColors.gray[3],
    },
    '& .MuiSelect-input': {
      padding: theme.spacing(1.5, 1),
      fontSize: theme.fontSize.normal,
    },
    '& .MuiFormHelperText-root': {
      fontSize: theme.fontSize.small,
      paddingLeft: theme.spacing(1),
      color: theme.mainColors.primary1[0],
      fontWeight: theme.fontWeight.normal,
    },
    '& .Mui-required': {
      '& .MuiInputLabel-asterisk': {
        color: theme.palette.error.main,
      },
    },
    '& .MuiChip-root': {
      borderRadius: theme.spacing(0.5),
      height: '22px',
      marginRight: theme.spacing(0.5),
      background: theme.mainColors.gray[3],
      color: theme.mainColors.primary1[0],
      fontSize: theme.fontSize.normal,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
    '& .MuiChip-label': {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
    '& .MuiOutlinedInput-notchedOutline legend': {
      display: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      top: 0,
      borderColor: theme.mainColors.gray[5],
    },
    '& .MuiSelect-icon': {
      color: theme.mainColors.primary1[0],
      right: '10px',
      top: 'calc(50% - 10px)',
      fontSize: theme.fontSizeIcon.normal,
    },
    '& .Mui-disabled': {
      backgroundColor: theme.mainColors.gray[2],
      color: theme.mainColors.gray[7],
      '& .MuiSelect-icon.Mui-disabled': {
        display: 'none',
      },
    },
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.mainColors.gray[6],
    },

    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `2px solid ${theme.mainColors.primary2[0]}`,
        backgroundColor: 'transparent',
      },
    },
    '&.tbl-select-native': {
      display: 'inline-block',
      '& .MuiSelect-root': {
        padding: 0,
        marginRight: theme.spacing(20 / 8),
        maxWidth: '480px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        padding: 0
      },
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      },
      '& .MuiSelect-icon': {
        right: 0
      },
      '& .Mui-disabled': {
        backgroundColor: 'unset'
      }
    }
  },
  inputLabel: {
    textTransform: 'capitalize',
    fontSize: theme.fontSize.small,
    fontWeight: theme.fontWeight.semi,
    paddingLeft: theme.spacing(1),
    lineHeight: `${theme.spacing(2.125)}px`,
    color: theme.mainColors.primary1[0],
    // textAlign: 'left',
    marginBottom: '3px',
    '& .MuiSvgIcon-root': {
      fontSize: 12,
      height: 16,
      verticalAlign: 'bottom',
    },
  },
  error: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.error.main} !important`,
    },
    '& .MuiFormHelperText-root': {
      color: `${theme.palette.error.main} !important`,
    },
  },
  menuPaper: {
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.24)',
    marginTop: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5),
    maxWidth: theme.spacing(63.25),
    minWidth: theme.spacing(46),
    width: 'auto !important',
    // maxHeight: '40vh',
    // marginTop: theme.spacing(1.5)
    // '&::-webkit-scrollbar': {
    //   // width: theme.spacing(2),
    //   width: theme.spacing(0.75),
    //   '&:hover': {
    //     width: theme.spacing(1.875)
    //   }
    // },
    // '&::-webkit-scrollbar-track': {
    //   // marginRight: theme.spacing(1),
    //   backgroundColor: '#eee',
    //   '&:hover': {
    //     // width: theme.spacing(1.875)
    //   }
    // },
    // '&::-webkit-scrollbar-track-piece': {
    //   '&:hover': {
    //     width: theme.spacing(1.875)
    //   }
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   backgroundColor: '#CED4DA',
    //   borderRadius: theme.spacing(1),
    //   '&:hover': {
    //     width: theme.spacing(1.875),
    //     backgroundColor: '#999'
    //   }
    // },
  },
  menu: {
    padding: theme.spacing(0.5, 0),
    overflowY: 'auto',
    listStyle: 'none',
    height: '100%',
    '& .MuiMenuItem-root': {
      // display: 'block',
      // textOverflow: 'ellipsis',
      // paddingRight: theme.spacing(3.5),
      // paddingLeft: theme.spacing(1),
      width: '100%',
      whiteSpace: 'pre-line',
      wordBreak: 'break-word',
      color: theme.mainColors.primary1[0],
      padding: theme.spacing(1.25, 2, 1.25, 1),
      fontSize: '16px',
      display: '-webkit-box',
      '-webkit-line-clamp': 4,
      '-webkit-box-orient': 'vertical',
      '& .menu-content': {
        width: `calc(100% - ${theme.spacing(5)}px)`,
        fontSize: '16px',
      }
    },
    '& .MuiListItem-button:hover': {
      backgroundColor: theme.mainColors.gray[3]
    },
    '& .Mui-selected': {
      position: 'relative',
      color: theme.palette.secondary.main,
      backgroundColor: 'inherit',
      display: 'flex',
      justifyContent: 'space-between',
      '& .selected-tick': {
        marginLeft: theme.spacing(2),
        height: '24px',
        lineHeight: '24px',
        '&::before': {
          fontFamily: 'icomoon',
          color: theme.palette.secondary.main,
          content: '"\\e929"',
          fontSize: theme.fontSizeIcon.medium
        },
      }
    },
    '&.max-width-480': {
      maxWidth: '480px'
    }
  },
  emptyItem: {
    display: 'none !important',
  },
  placeholder: {
    '& .MuiOutlinedInput-root': {
      '& .MuiInputBase-input': {
        color: theme.mainColors.gray[7],
      },
    },
  },
  space: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;