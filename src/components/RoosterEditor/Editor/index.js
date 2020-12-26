import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Editor as RoosterJsEditor
} from 'roosterjs-editor-core';

import {
  HyperLink,
  Paste,
  ContentEdit,
  Watermark,
  TableResize,
  getDefaultContentEditFeatures,
  CustomReplace as CustomReplacePlugin,
  EntityPlugin,
  ImageResize
} from 'roosterjs-editor-plugins';

import styles from './styles';
export const UrlPlaceholder = '$url$';

// let editorInstance = null;
let editorInstanceTogglePlugins = null;

class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.initState;
    this.editor = null;
  }

  getSnapshotBeforeUpdate() {
    this.disposeEditor();
  }

  componentDidUpdate() {
    this.initEditor();
  }

  componentDidMount() {
    this.initEditor();
    if (editorInstanceTogglePlugins === null) {
      editorInstanceTogglePlugins = this.editor;
    }
  }

  componentWillUnmount() {
    if (editorInstanceTogglePlugins === this.editor) {
      editorInstanceTogglePlugins = null;
    }
    this.disposeEditor();
  }

  resetEditorPlugin(pluginState) {
    this.setState(pluginState);
  }

  getContent() {
    return this.editor?.getContent();
  }

  initEditor() {
    const { disabled } = this.props;
    const { pluginList } = this.state;

    editorInstanceTogglePlugins = {
      hyperlink: pluginList.hyperlink ? new HyperLink(this.getLinkCallback()) : null,
      paste: pluginList.paste ? new Paste() : null,
      contentEdit: pluginList.contentEdit
        ? new ContentEdit(this.getContentEditOptions())
        : null,
      watermark: pluginList.watermark ? new Watermark(this.state.watermarkText) : null,
      imageResize: pluginList.imageResize ? new ImageResize() : null,
      tableResize: pluginList.tableResize ? new TableResize() : null,
      // pickerPlugin: pluginList.pickerPlugin
      //     ? new PickerPlugin(new SampleColorPickerPluginDataProvider(), {
      //           elementIdPrefix: 'samplepicker-',
      //           changeSource: 'SAMPLE_COLOR_PICKER',
      //           triggerCharacter: ':',
      //           isHorizontal: true,
      //       })
      //     : null,
      customReplace: pluginList.customReplace ? new CustomReplacePlugin() : null,
      entityPlugin: pluginList.entityPlugin ? new EntityPlugin() : null,
    };
    let plugins = [
      ...Object.keys(editorInstanceTogglePlugins).map(
        k => (editorInstanceTogglePlugins)[k]
      ),
      ...this.props.plugins,
    ];
    let defaultFormat = { ...this.state.defaultFormat };
    let options = {
      plugins: plugins,
      defaultFormat: defaultFormat,
      undo: this.props.undo,
      initialContent: this.props.defaultValue,
      enableExperimentFeatures: this.state.useExperimentFeatures,
      omitContentEditableAttributeChanges: disabled
    };
    this.editor = new RoosterJsEditor(this.contentDiv, options);
  }

  disposeEditor() {
    if (this.editor) {
      this.editor.dispose();
    }
    this.editor = null;
  }

  getLinkCallback = () => (url) => {
    let linkCallback = (url) => url;
    let linkTitle = this.state.linkTitle;

    if (linkTitle) {
      let index = linkTitle.indexOf(UrlPlaceholder);
      if (index >= 0) {
        let left = linkTitle.substr(0, index);
        let right = linkTitle.substr(index + UrlPlaceholder.length);
        linkCallback = url => left + url + right;
      } else {
        linkCallback = () => linkTitle;
      }
    } else {
      linkCallback = null;
    }

    return linkCallback;
  }

  getContentEditOptions() {
    let defaultFeatures = getDefaultContentEditFeatures();
    return Object.assign(defaultFeatures, this.state.contentEditFeatures);
  }

  render() {
    const { classes, disabled } = this.props;
    return (
      <div className={`${this.props.className} ${classes.editor} ${disabled ? classes.editorDisabled : ''}`}
        ref={ref => (this.contentDiv = ref)}>
      </div>
    );
  }
}
export default withStyles(styles)(Editor);
