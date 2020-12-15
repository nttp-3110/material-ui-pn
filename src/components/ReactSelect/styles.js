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
      height: theme.spacing(5.5),
    },
    '& .css-1okebmr-indicatorSeparator': {
      width: 0
    },
    '& .css-1hb7zxy-IndicatorsContainer': {
      padding: theme.spacing(1.25)
    }
  },
  valueContainer: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    maxWidth: 'calc(100% - 84px)',
    overflow: 'hidden'
  },
  paper: {
    // position: 'absolute',
    // zIndex: 1,
    // marginTop: theme.spacing.unit,
    // left: 0,
    // right: 0,
    // maxHeight: 'unset'
    maxWidth: theme.spacing(63.25),
    marginTop: theme.spacing(0.75)
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
    height: theme.spacing(3.5)
  },
  menuItem: {
    '& .MuiMenuItem-root': {
      padding: theme.spacing(1.25, 0, 1.25, 1),
    },
    '& .Mui-selected': {
      backgroundColor: '#EBF1F9'
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
    '& .MuiCheckbox-colorPrimary':{

    }
  }
}));

export default useStyles;