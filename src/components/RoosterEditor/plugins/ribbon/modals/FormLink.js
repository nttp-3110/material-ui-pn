import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createLink } from 'roosterjs-editor-api';
import { withStyles } from '@material-ui/core/styles';

import TextInput from '../../../shared/Input/TextInput';
import InputSingleActions from '../../../shared/Input/InputSingleActions';
import styles from './styled';

class InsertLink extends React.PureComponent {

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} style={{ width: 544 }}>
        <Grid item sm={6} className={classes.inputContainer}>
          <TextInput
            ref={ref => (this.txtUrl = ref)}
            label={'URL'}
            defaultValue={this.props.url}
          />
        </Grid>
        <Grid item sm={6} className={classes.inputContainer}>
          <TextInput
            ref={ref => (this.txtDisplayText = ref)}
            label={'DisplayText'}
            defaultValue={this.props.displayText}
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
    console.log(this.props.editor, this.txtUrl.value, null, this.txtDisplayText.value);
    this.props.onDismiss();
    createLink(this.props.editor, this.txtUrl.value, null, this.txtDisplayText.value);
  };
}

const FormLink = withStyles(styles)(InsertLink);

export default function renderInsertLinkDialog(editor, onDismiss, ...rest) {
  let a = editor?.getElementAtCursor('a[href]');
  return (
    <FormLink
      editor={editor}
      onDismiss={onDismiss}
      url={a ? a.href : ''}
      displayText={a ? a.innerText : ''}
    />
  );
}
