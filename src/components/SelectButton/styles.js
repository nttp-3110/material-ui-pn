import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      height: theme.spacing(5.5),
      width: theme.spacing(13.875),
      backgroundColor: '#1A7AE6',
      color: theme.openColors.white,
      borderRadius: theme.spacing(1),
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      }
    },
    '& .MuiSelect-icon': {
      color: theme.openColors.white
    },
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      },
    },
    '& .MuiSelect-select': {
      '&:focus': {
        backgroundColor: 'transparent'
      }
    }
  },
  menuPaper: {
    width: theme.spacing(20),
    marginTop: theme.spacing(0.75),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 8px 32px rgba(33, 37, 41, 0.16)',
  },
  menu: {
    padding: theme.spacing(1, 0),
    overflowY: 'auto',
    listStyle: 'none',
    '& .MuiMenuItem-root': {
      width: '100%',
      whiteSpace: 'pre-line',
      wordBreak: 'break-word',
      color: theme.mainColors.primary1[0],
      padding: theme.spacing(1.25, 2, 1.25, 1),
      fontSize: '16px',
      display: 'flex',
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
      color: theme.palette.secondary.main,
      backgroundColor: '#EBF1F9',
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
}));

export default useStyles;