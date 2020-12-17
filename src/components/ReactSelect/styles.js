import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputLabel: {
    textTransform: 'capitalize',
    fontSize: theme.fontSize.small,
    fontWeight: theme.fontWeight.semi,
    paddingLeft: theme.spacing(1),
    lineHeight: `${theme.spacing(2.125)}px`,
    color: theme.mainColors.primary1[0],
    marginBottom: '3px',
  },
  root: {
    flexGrow: 1,
    height: 250,
    '& .css-yk16xz-control': {
      borderRadius: theme.spacing(1),
      height: theme.spacing(5.5),
      '&:hover': {
        border: '1px solid #1A7AE6',
      }
    },
    '& .css-1pahdxg-control': {
      border: '1px solid #1A7AE6',
      boxShadow: 'none',
      borderRadius: theme.spacing(1),
      height: theme.spacing(5.5),
    },
    '& .css-1okebmr-indicatorSeparator': {
      width: 0
    },
    '& .css-1hb7zxy-IndicatorsContainer': {
      padding: theme.spacing(1.25)
    },
    '& .css-4ljt47-MenuList': {
      padding: theme.spacing(1, 0),
      boxShadow: '0px 8px 32px rgba(33, 37, 41, 0.16)',
      borderRadius: theme.spacing(1)
    }
  },
  valueContainer: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    maxWidth: 'calc(100% - 84px)',
    overflow: 'hidden',
    '& .css-1uccc91-singleValue': {
      width: 'calc(100% - 40px)',
    }
  },
  paper: {
    maxWidth: theme.spacing(63.25),
    marginTop: theme.spacing(0.75),
    boxShadow: 'none',
  },
  menuList: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    height: '40vh'
  },
  expandLess: {
    transform: 'rotate(180deg)',
  },
  chip: {
    borderRadius: theme.spacing(0.5),
    // width: theme.spacing(9.25),
    maxWidth: '100%',
    height: theme.spacing(3.5)
  },
  menuItem: {
    '& .MuiMenuItem-root': {
      padding: theme.spacing(1.25, 2, 1.25, 1),
    },
    '& .Mui-selected': {
      color: '#1A7AE6',
      backgroundColor: '#EBF1F9',
      '&:hover': {
        backgroundColor: theme.openColors.gray[1]
      }
      // padding: theme.spacing(1.25, 2, 1.25, 1),
    },
    '& .selected-tick': {
      marginLeft: theme.spacing(2),
      height: '24px',
      lineHeight: '24px',
      '&:before': {
        fontFamily: 'icomoon',
        color: theme.palette.secondary.main,
        content: '"\\e929"',
        fontSize: theme.fontSizeIcon.medium
      }
    },
    '& .option-content': {
      whiteSpace: 'normal',
    }
  },
  singleSelect: {
    '& .MuiMenuItem-root': {
      padding: theme.spacing(1.25, 2, 1.25, 1),
      display: 'flex',
      justifyContent: 'space-between',
      '-webkit-line-clamp': 4,
      '-webkit-box-orient': 'vertical',
    },
    '& .option-content': {
      width: `calc(100% - ${theme.spacing(5)}px)`,
      fontSize: '16px',
      whiteSpace: 'normal'
    }
  },
  expandIcon: {
    fontSize: theme.fontSizeIcon.medium,
    marginLeft: theme.spacing(1),
  },
  clearIcon: {
    fontSize: theme.fontSizeIcon.medium,
    cursor: 'pointer'
  },
  ellipsis: {
    marginLeft: theme.spacing(0.5),
    paddingTop: theme.spacing(0.5)
  },
  checkbox: {
    marginRight: theme.spacing(2),
    '& .MuiCheckbox-root': {
      padding: 0
    },
    '& .MuiCheckbox-colorPrimary': {
      '&.Mui-checked': {
        color: '#1A7AE6',
      }
    }
  }
}));

export default useStyles;