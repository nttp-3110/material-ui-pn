import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RibbonButton from './RibbonButton';
import ribbonButtons from './ribbonButtons';
import { getFormatState, rotateElement } from 'roosterjs-editor-api';
import { QueryScope } from 'roosterjs-editor-types';
import styles from './RibbonStyles';
import OtherOptions from './modals/OtherOptions';
import RibbonIcons from './RibbonIcons';
// let styles = require('./Ribbon.css');

class Ribbon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownShown: false
    };
  }
  onMore = () => {
    this.setState((prevState) => ({ isDropDownShown: !prevState.isDropDownShown }));
  }

  onRotateImage = () => {
    const editor = this.props.plugin.getEditor();
    const images = editor.queryElements('img', QueryScope.InSelection);
    if (images.length > 0) {
      rotateElement(editor, images[0], 45);
    }
  };

  onSave = () => {
    let editor = this.props.plugin.getEditor();
    let w = window.open();
    w.document.write(editor.getContent());
  };

  onClear = () => {
    let editor = this.props.plugin.getEditor();
    editor.addUndoSnapshot(() => {
      editor.setContent('');
    });
  };

  // onPopOut = () => {
  //     MainPaneBase.getInstance().popout();
  // };

  onButtonClicked = () => {
    this.forceUpdate();
  };

  render() {
    const { classes, customButtons, ...rest } = this.props;
    const plugin = this.props.plugin;
    if (!plugin) {
      return null;
    }
    const editor = plugin.getEditor();
    const format = editor && getFormatState(editor);
    const {
      heading1, heading2,
      bold, italic, underline, strikethrough,
      formular2, insertLink, table, insertImage,
      alignLeft, alignRight, alignCenter,
      bullet, numbering, blockQuote,
      clearFormat,
      ...otherBtn
    } = Object.assign(ribbonButtons, customButtons);
    const buttons = [
      { heading1, heading2 },
      { bold, italic, underline, strikethrough },
      { formular2, insertLink, table, insertImage },
      { bullet, numbering, blockQuote },
      { clearFormat }
    ];

    return (
      <div className={classes.ribbon + ' ' + (this.props.className || '')}>
        {buttons.map((group, index) => {
          return (
            <>
              {Object.keys(group).map((key, idx) => {
                if (index === 3 && idx === 0) {
                  return (
                    <OtherOptions
                      IconButton={RibbonIcons.IcnAlignLeft}
                      buttons={{ alignLeft, alignCenter, alignRight }}
                      plugin={plugin}
                      format={format}
                      onClicked={this.onButtonClicked}
                      {...rest}
                    />
                  );
                }
                return (
                  <RibbonButton
                    key={key}
                    plugin={plugin}
                    format={format}
                    button={group[key]}
                    onClicked={this.onButtonClicked}
                    {...rest}
                  />
                );
              })}
              {index < buttons.length - 1 && <div className={classes.line}></div>}
            </>
          );
        })}
        <span className={classes.textButton}>
          <OtherOptions
            IconButton={RibbonIcons.IcnMore}
            buttons={otherBtn}
            plugin={plugin}
            format={format}
            onClicked={this.onButtonClicked}
            {...rest}
          />
        </span>
      </div>
    );
  }
}
Ribbon.propTypes = {
  plugin: PropTypes.array,
  ribbonButtons: PropTypes.array
};
Ribbon.defaultProps = {
  customButtons: []
};
export default withStyles(styles)(Ribbon);