const styles = theme => ({
  root: {
    '&:focus': {
      '& .editor-container': {
        border: '1px solid red'
      }
    }
  },
  editorContainer: props => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    border: '1px solid ',
    borderRadius: '8px',
    borderColor: theme.openColors.gray[2],
    background: theme.openColors.gray[0],
    transition: 'all 200ms ease-in-out'
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
  editor: props => ({
    minWidth: 200,
    flexGrow: 1,
    flexShrink: 1,
    position: 'relative',
    height: 'auto !important',
    overflow: 'visible',
    minHeight: props.height || '200px'
  })
});
export default styles;