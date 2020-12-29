import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiAutocomplete-inputRoot': {
      '&[class*="MuiOutlinedInput-root"]': {
        padding: theme.spacing(1.25, 2.25, 1.25, 1),
        borderRadius: theme.spacing(1),
        // height: theme.spacing(5.5),
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.openColors.gray[2]
      },
      '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
        padding: theme.spacing(0),
        fontSize: theme.fontSize.normal,
        color: theme.mainColors.primary1[0],
      },
    },
    '& .MuiFormHelperText-root': {
      fontSize: theme.fontSize.small,
      paddingLeft: theme.spacing(1),
      color: theme.mainColors.primary1[0],
    },
    '& .Mui-required': {
      '& .MuiInputLabel-asterisk': {
        color: theme.palette.error.main,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: `${theme.spacing(0.125)}px solid ${theme.openColors.gray[2]}`,
    },
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.mainColors.primary2[0]} !important`,
        backgroundColor: 'transparent',
      },
    },
    '& .MuiAutocomplete-inputFocused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.mainColors.primary2[0]} !important`,
        backgroundColor: 'transparent',
      },
    },
  },
  inputLabel: {
    textTransform: 'capitalize',
    fontSize: theme.spacing(1.75),
    fontWeight: theme.fontWeight.semi,
    paddingLeft: theme.spacing(1),
    lineHeight: `${theme.spacing(2.5)}px`,
    color: theme.openColors.gray[9],
    marginBottom: theme.spacing(0.375),
  },
  error: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.error.main} !important`,
    },
    '& .MuiFormHelperText-root': {
      color: `${theme.palette.error.main} !important`,
      fontWeight: theme.fontWeight.normal,
    },
  },
  option: {
    padding: theme.spacing(1.25, 2, 1.25, 1),
    width: '100%',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
    display: 'flex',
    justifyContent: 'space-between',
  },
  popupIndicator: {
    color: theme.openColors.gray[9],
    fontSize: theme.fontSizeIcon.medium,
  },
  clearIndicator: {
    color: theme.openColors.gray[9],
    fontSize: theme.fontSizeIcon.medium,
  },
  popper: {
    maxWidth: theme.spacing(63.25),
    minWidth: theme.spacing(46),
    width: 'auto !important',
  },
  paper: {
    marginTop: theme.spacing(0.75),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 8px 32px rgba(33, 37, 41, 0.16)',
    '& .MuiAutocomplete-listbox': {
      // overflow: 'visible',
      '& .MuiAutocomplete-option': {
        '&:hover': {
          backgroundColor: theme.openColors.gray[1],
        },
        '&[aria-selected="true"]': {
          backgroundColor: '#EBF1F9',
          color: '#1A7AE6',
        }
      }
    }
  },
  optionContent: {
    width: `calc(100% - ${theme.spacing(5)}px)`,
    fontSize: '16px',
  },
  selectedTick: {
    marginLeft: theme.spacing(2),
    height: theme.spacing(3),
    lineHeight: '24px',
    '&:before': {
      fontFamily: 'icomoon',
      color: theme.palette.secondary.main,
      content: '"\\e929"',
      fontSize: theme.fontSizeIcon.medium
    }
  },
  tag: {
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.openColors.gray[2]
  }
}));

export default useStyles;