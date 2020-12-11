const styles = theme => ({
    root: props => ({
        height: '100%',
    }),
    editorContainer: props => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: props.height || '200px',
        // height: '100%',
        border: '1px solid ',
        borderRadius: '8px',
        borderColor: theme.openColors.gray[2],
        background: theme.openColors.gray[0],
        '&.focus-content': {
            borderColor: theme.mainColors.primary2[0],
            outline: 'none',
            boxShadow: 'rgba(235,241,249,1) 0 0 0 3px'
        }
    }),

    noGrow: {
        flex: '0 0 auto'
    },
    body: {
        flex: '1 1 auto',
        position: 'relative',
        display: 'flex',
        background: theme.openColors.white,
        borderRadius: '8px',
    },
    editor: {
        minWidth: 200,
        flexGrow: 1,
        flexShrink: 1,
        position: 'relative',
        height: '100%'
    }
});
export default styles;