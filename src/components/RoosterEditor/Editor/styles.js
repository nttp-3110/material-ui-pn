const styles = theme => ({
    editor: {
        // borderTop: `solid 1px ${theme.openColors.gray[2]}`,
        overflow: 'auto',
        padding: '10px',
        outline: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        '& .katex-wrapper': {
            '& .placeholder': {
                display: 'inline-block',
                position: 'relative',
                marginRight: -2
            },
            '& .placeholder-right': {
                display: 'inline-block',
                position: 'relative',
                marginRight: -2
            },
            position: 'relative',
            userSelect: 'all',
            display: 'inline-block',
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineColor: 'transparent',
            '&:hover': {
                outlineColor: theme.palette.warning.light,
            },
            '&.selected': {
                outlineColor: theme.palette.primary.light,
            },
            '&.block': {
                display: 'block'
            },
            '& .katex-html, & .katex-html span': {
                // pointerEvents: 'none',
                userSelect: 'none',
                lineHeight: 0
            },
            // '& mrow': {
            //     display: 'inline'
            // }
        }
    },
    placeholder: {
        padding: '10px'
    },
    editorDisabled: {
        opacity: '0.4'
    }
});
export default styles;