import React from 'react';
import RoosterReact from '../../components/RoosterEditor';
import InputComponent from '../../components/InputComponent';

import 'katex/dist/katex.min.css';

export const Rooster = ({ defaultValue, ...rest }) => {
  const ref = React.useRef();
  const [content, setContent] = React.useState(null);
  const [originValue, setOriginValue] = React.useState(defaultValue);
  return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
    <InputComponent
      ref={ref}
      Component={RoosterReact}

      defaultValue={originValue}
      handleClickInside={() => {
        const editor = ref.current.input.getEditor();
        if (editor) {
          editor.focus();
        }
      }}
      onSave={() => {
        const content = ref.current.input.getContent();
        setContent(content);
        setOriginValue(content);
      }}
      onAbort={() => {
        const editor = ref.current.input.getEditor();
        editor.setContent('');
        setContent('');
      }}
      {...rest}
    />
    {!rest.autoSave && <button onClick={() => setContent(ref.current.input.getContent())}>Show Content</button>}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div >;
};