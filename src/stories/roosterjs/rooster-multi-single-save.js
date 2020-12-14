import React from 'react';
import RoosterReact from '../../components/RoosterEditor';
import InputComponent from '../../components/RoosterEditor/shared/utils/InputComponent';

import 'katex/dist/katex.min.css';

export const Rooster = () => {
  const [content, setContent] = React.useState(null);
  const [content2, setContent2] = React.useState(null);
  return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
    <InputComponent
      required
      autoSave
      label={'Editor Single Save 1'}
      Component={RoosterReact}
      handleClickInside={(inputRef) => {
        const editor = inputRef.current.getEditor();
        if (editor) {
          editor.focus();
        }
      }}
      onSave={(event, inputRef, setError) => {
        const content = inputRef.current.getContent();
        setContent(content);
      }}
      onAbort={(event, inputRef) => {
        const editor = inputRef.current.getEditor();
        editor.setContent('');
        setContent('');
      }}
      height={200}
    />
    <div dangerouslySetInnerHTML={{ __html: content }} />

    <InputComponent
      autoSave
      required
      label={'Editor Single Save 2'}
      Component={RoosterReact}
      handleClickInside={(inputRef) => {
        const editor = inputRef.current.getEditor();
        if (editor) {
          editor.focus();
        }
      }}
      onSave={(event, inputRef, setError) => {
        const content = inputRef.current.getContent();
        setContent2(content);
      }}
      onAbort={(event, inputRef) => {
        const editor = inputRef.current.getEditor();
        editor.setContent('');
        setContent2('');
      }}
      height={200}
    />
    <div dangerouslySetInnerHTML={{ __html: content2 }} />

  </div>;
};