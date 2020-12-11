import React from 'react';
import RoosterReact from '../../components/RoosterEditor';
import InputSingleSave from '../../components/RoosterEditor/shared/utils/InputSingleSave';

import 'katex/dist/katex.min.css';

export const Rooster = () => {
  const ref = React.useRef();
  const [content, setContent] = React.useState(null);
  return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
    <InputSingleSave
      required
      label={'Editor Single Save'}
      InputComponent={RoosterReact}
      defaultValue={'defaultValue'}
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
      height={300}
    />
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>;
};