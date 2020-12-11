import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button'
// import { Editor } from 'roosterjs-editor-core';
import { editTable, formatTable, insertTable } from 'roosterjs-editor-api';
// import { TableOperation } from 'roosterjs-editor-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import styles from './styled';

import TextInput from '../../../shared/Input/TextInput';
import InputSingleActions from '../../../shared/Input/InputSingleActions';

class TableOptions extends React.PureComponent {
  onInsertTable = () => {
    this.props.onDismiss();
    const rows = this.columnsRef.value;
    const cols = this.rowsRef.value;
    if (cols > 0 && rows > 0) {
      insertTable(this.props.editor, cols, rows);
    }
  };
  render() {
    const { classes } = this.props;;
    return (
      <Grid container className={classes.root} style={{ width: 368 }}>
        <Grid item sm={6} className={classes.inputContainer}>
          <TextInput
            ref={ref => (this.columnsRef = ref)}
            label={'Columns'}
          />
        </Grid>
        <Grid item sm={6} className={classes.inputContainer}>
          <TextInput
            ref={ref => (this.rowsRef = ref)}
            label={'Rows'}
          />
        </Grid>
        <InputSingleActions
          className={classes.formActions}
          open={true}
          handleSave={this.onInsertTable}
          handleCancel={this.props.onDismiss}
        />
      </Grid>
    );
  }
}
const FormTable = withStyles(styles)(TableOptions);

export default function renderTableOptions(editor, onDismiss) {
  return <FormTable editor={editor} onDismiss={onDismiss} />;
}
