// import {  EditorPlugin } from 'roosterjs-editor-core';
import { PluginEventType } from 'roosterjs-editor-types';

export default class RibbonPlugin {

  getName() {
    return 'Ribbon';
  }

  initialize(editor) {
    this.editor = editor;
  }

  dispose() {
    this.editor = null;
  }

  getEditor() {
    return this.editor;
  }

  refCallback = (ref) => {
    this.ribbon = ref;
    if (ref) {
      ref.forceUpdate();
    }
  };

  onPluginEvent(event) {
    const { onClickInside, onChange } = this.ribbon?.props || {};
    if (
      this.ribbon &&
      (event.eventType === PluginEventType.KeyUp ||
        event.eventType === PluginEventType.MouseUp ||
        event.eventType === PluginEventType.ContentChanged)
    ) {
      this.ribbon.forceUpdate();
      if (this.getEditor()?.hasFocus() && onClickInside) {
        onClickInside(event);
        if (onChange && (event.eventType === PluginEventType.KeyUp || event.eventType === PluginEventType.ContentChanged)) {
          onChange(event);
        }
      }

    }
  }
}
