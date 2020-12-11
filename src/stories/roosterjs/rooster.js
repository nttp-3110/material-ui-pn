import React from 'react';
import RoosterReact from '../../components/RoosterEditor';

import 'katex/dist/katex.min.css';

export const Rooster = () => {
    const ref = React.useRef();
    const [content, setContent] = React.useState(null);
    return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
        <RoosterReact ref={ref} height={200} />
        <button onClick={() => setContent(ref.current.getContent())}>Show Render HTML</button>
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>;
};