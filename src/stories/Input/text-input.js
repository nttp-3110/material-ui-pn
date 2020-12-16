import React from 'react';
import { TextInput } from '../../components/InputFields';

import 'katex/dist/katex.min.css';

export const PnTextInput = ({ defaultValue, ...rest }) => {
  const ref = React.useRef();
  const [content, setContent] = React.useState(null);
  const [originValue, setOriginValue] = React.useState(defaultValue);
  return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
    <TextInput
      ref={ref}
      defaultValue={originValue}
      {...rest}
    />
    <br />
    <button onClick={() => {
      setContent(ref.current.value);
      setOriginValue(ref.current.value);
    }}>Show Content</button>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div >;
};