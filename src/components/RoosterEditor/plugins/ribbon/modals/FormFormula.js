import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { EVENT_TYPE } from '../../mathjax';
import TextInput from '../../../../InputFields/TextInput';
import InputSingleActions from '../../../../InputComponent/InputSingleActions';
import styles from './styled';
class InsertFormula extends React.Component {
  state = {
    formula: '',
  }

  onChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });

  }

  render() {
    const { classes } = this.props;
    const { formula } = this.state;
    return (
      <Grid container className={classes.root} style={{ width: 280 }}>
        <Grid item xs={12} className={classes.inputContainer}>
          <TextInput
            ref={ref => (this.formulaRef = ref)}
            label={'Formula'}
            defaultValue={formula}
          />
        </Grid>
        <InputSingleActions
          className={classes.formActions}
          open={true}
          handleSave={this.onOk}
          handleCancel={this.props.onDismiss}
        />
      </Grid>
    );
  }

  onOk = () => {
    const { editor } = this.props;
    this.props.onDismiss();
    editor.triggerPluginEvent(EVENT_TYPE, { formula: this.formulaRef.value });
  };
}
const FormFormula = withStyles(styles)(InsertFormula);

export default function renderInsertFormulaDialog(editor, onDismiss) {
  return (
    <FormFormula
      editor={editor}
      onDismiss={onDismiss}
    />
  );
}
