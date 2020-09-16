
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '.text-ellipsis': {
            whiteSpace: 'nowrap',
            overflow: ' hidden !important',
            textOverflow: 'ellipsis',
        },
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
    },
    inputContainer: {
        width: '100%',
        display: 'flex'
    },
    input: {
        padding: '10px 8px',
        borderRadius: '8px',
        border: '1px solid #E9ECEF',
        width: '100%',
        '&:focus-within': {
            outline: 'none',
            borderColor: '#1A7AE6',
        },
        '& .MuiInputBase-input': {
            padding: 0,
            fontSize: '15px',
            color: '#212529',
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
            color: '#E03131'
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
        right: 0
    },
    actionBtn: {
        fontSize: '20px',
        borderRadius: '8px',
        padding: '6px',
        cursor: 'pointer'
    },
    clearIcon: {
        backgroundColor: '#E9ECEF',
        color: '#495057',
        marginRight: '4px'
    },
    doneIcon: {
        backgroundColor: '#1A7AE6',
        color: '#FFFFFF'
    }
}));

export default useStyles;