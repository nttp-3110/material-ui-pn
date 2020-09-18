
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        '& ::placeholder': {
            color: '#868E96'
        }
    },
    label: {
        padding: '6px 8px',
        fontSize: '15px',
        display: 'block',
        color: '#212529',
        whiteSpace: 'nowrap',
        overflow: ' hidden !important',
        textOverflow: 'ellipsis',
        '&::first-letter': {
            textTransform: 'uppercase'
        }
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        position: 'relative'
    },
    input: {
        padding: '10px 8px',
        borderRadius: '8px',
        border: '1px solid #E9ECEF',
        width: '100%',
        transition: 'all 200ms ease-in-out',
        '&:focus-within': {
            outline: 'none',
            borderColor: '#1A7AE6',
            boxShadow: 'rgba(235,241,249,1) 0 0 0 3px'
        },
        '& .MuiInputBase-input': {
            padding: 0,
            fontSize: '15px',
            color: '#212529',
            height: 'auto',
            '&:focus': {
                outline: 'none',
                borderColor: '#1A7AE6',
            }
        },
        '& .MuiInputAdornment-root': {
            margin: 0,
        },
        '& .MuiInput-underline:before, & .MuiInput-underline:after': {
            transition: 'none',
            border: 0
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            border: 0
        }
    },
    hasError: {
        color: '#E03131'
    },
    asterisk: {
        color: '#E03131'
    },
    inputError: {
        borderColor: '#E03131',
        '& .MuiInputBase-input': {
            color: '#E03131',
            '&:focus': {
                color: '#212529',
            }
        }
    },
    hepperText: {
        position: 'relative',
        marginTop: '8px',
        paddingLeft: '8px',
        fontSize: '15px'
    },
    hasOpen: {
        marginRight: '76px'
    },
    actions: {
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex'
    },
    actionBtn: {
        borderRadius: '8px',
        padding: '6px',
        cursor: 'pointer'
    },
    icon: {
        fontSize: '20px',
        height: '20px',
        width: '20px',
        display: 'block'
    },
    clearIcon: {
        backgroundColor: '#E9ECEF',
        color: '#495057',
        marginRight: '4px'
    },
    doneIcon: {
        backgroundColor: '#1A7AE6',
        color: '#FFFFFF'
    },
    controlActionWrapper: {
        position: 'absolute',
        right: 0,
        top: 0
    },
    controlActionContent: {
        position: 'relative',
        // display: 'flex',
        // flexDirection: 'column'

    },
    dropUpIcon: {
        position: 'absolute',
        top: '-8px',
        // bottom: '-8px',
        right: 0,
        cursor: 'pointer',
        // // height: 0,
        // zIndex: -1,
        fontSize: 12
    },
    dropDownIcon: {
        position: 'absolute',
        right: 0,

        cursor: 'pointer',
        fontSize: 12
        // height: 0

    }
}));

export default useStyles;