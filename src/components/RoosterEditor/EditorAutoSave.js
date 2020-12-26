import React from 'react';
import Editor from '.';
import InputComponent from '../../components/InputComponent';

import 'katex/dist/katex.min.css';

const EditorAutoSave = ({ handleClickInside, onSave, onAbort, ...rest }) => {
  const ref = React.useRef();
  return (
    <InputComponent
      ref={ref}
      Component={Editor}

      autoSave
      handleClickInside={(inputRef) => {
        const editor = inputRef.current.getEditor();
        if (editor) {
          editor.focus();
        }
        if (handleClickInside) {
          handleClickInside(inputRef);
        }
      }}
      onSave={(event, inputRef, setError) => {
        if (onSave) {
          onSave(event, inputRef, setError);
        }
      }}
      onAbort={(event, inputRef) => {
        if (onAbort) {
          onAbort(event, inputRef);
        }
      }}
      {...rest}
    />
  );
};

export default EditorAutoSave;