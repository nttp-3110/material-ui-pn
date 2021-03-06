import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { getDefaultContentEditFeatures } from 'roosterjs-editor-plugins';
import Editor from './Editor';
import Ribbon from './plugins/ribbon/Ribbon';

import InputLabel from '../InputComponent/InputLabel';
import PluginManage from './plugins/plugins';
import styles from './styles';

export const UrlPlaceholder = '$url$';
class RoosterEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocus: true
    };
    this.timeoutId = null;
    this.isFocus = false;
    this.editorRef = React.createRef();
    this.pluginManage = null;
    this.initialState = {
      pluginList: {
        hyperlink: true,
        paste: true,
        contentEdit: true,
        watermark: true,
        imageResize: true,
        tableResize: true,
        customReplace: true,
        pickerPlugin: true,
        entityPlugin: true,
      },
      contentEditFeatures: getDefaultContentEditFeatures(),
      defaultFormat: {},
      linkTitle: 'Ctrl+Click to follow the link:' + UrlPlaceholder,
      watermarkText: 'Type content here ...',
      showRibbon: true,
      useExperimentFeatures: true
    };
  }

  initPlugins() {
    if (this.pluginManage) {
      this.pluginManage.dispose();
      this.pluginManage = null;
    }
    this.pluginManage = new PluginManage();
  }

  onBlur = () => {
    this.timeoutId = setTimeout(() => {
      this.isFocus = false;
      if (this.props.onBlur) {
        this.props.onBlur();
      }
    });
  }

  onFocus = () => {
    clearTimeout(this.timeoutId);

    if (!this.isFocus) {
      this.isFocus = true;
      if (this.props.onFocus) {
        this.props.onFocus();
      }
    }
  }

  getEditor = () => {
    return this.editorRef.current.editor;
  };

  getContent = () => {
    return this.editorRef.current.getContent();
  }

  resetEditorPlugin = (pluginState) => {
    this.editorRef.current.resetEditorPlugin(pluginState);
  }

  updateFormatState = () => {
    this.pluginArray.getPlugins().formatState.updateFormatState();
  }

  render() {
    this.initPlugins();
    const { classes, label, className, required, disabled, placeholder, ...rest } = this.props;
    const plugins = this.pluginManage?.getPlugins() ?? {};
    const pluginArray = this.pluginManage?.getAllPluginArray() ?? [];
    if (placeholder) {
      this.initialState.watermarkText = placeholder;
    }
    return (
      <div className={classes.root} onBlur={this.onBlur} onFocus={this.onFocus}>
        {label && <div className={'input-label'}>
          <InputLabel
            label={label}
            required={required}
          />
        </div>}
        <div className={`${classes.editorContainer} ${className} editor-container input-container`}>
          <Ribbon
            plugin={plugins.ribbon}
            className={classes.noGrow}
            ref={plugins?.ribbon?.refCallback}
            disabled={disabled}
            {...rest}
          />
          <div className={`${classes.body}`}>
            <Editor
              plugins={pluginArray}
              className={classes.editor}
              ref={this.editorRef}
              initState={this.initialState}
              placeholder={'placeholder'}
              disabled={disabled}
              {...rest}
            />
          </div>
        </div>

      </div>
    );
  }
}
RoosterEditor.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};
export default withStyles(styles)(React.forwardRef((props, ref) => <RoosterEditor {...props} ref={ref} />));
