import React, { useEffect } from 'react';
import { TextInput } from '../../components/InputFields';
import InputComponent from '../../components/InputComponent';

import 'katex/dist/katex.min.css';

export const PnTextInput = ({ defaultValue, label, inputProps, required, placeholder, ...rest }) => {
  const ref = React.useRef();
  const [content, setContent] = React.useState(null);
  const [originValue, setOriginValue] = React.useState(defaultValue);

  useEffect(() => {
    setOriginValue(defaultValue);
  }, [defaultValue]);

  return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
    <InputComponent

      ref={ref}
      Component={TextInput}

      autoSave
      defaultValue={originValue}

      onSave={(e, inputRef, setError) => {
        const content = inputRef.current.input.value;
        setContent(content);
        setOriginValue(content);
      }}
      onAbort={() => {
        setContent('');
        setOriginValue(defaultValue);
      }}

      label={label}
      required={required}
      placeholder={placeholder}
      inputProps={inputProps}
      {...rest}
    />
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div >;
};