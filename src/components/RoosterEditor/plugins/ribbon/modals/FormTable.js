import React from 'react';
import PropTypes from 'prop-types';

import { insertTable } from 'roosterjs-editor-api';
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
TableOptions.propTypes = {
  classes: PropTypes.object,
  editor: PropTypes.object,
  onDismiss: PropTypes.func
};
TableOptions.defaultProps = {

};
const FormTable = withStyles(styles)(TableOptions);

export default function renderTableOptions(editor, onDismiss) {
  return <FormTable editor={editor} onDismiss={onDismiss} />;
}
