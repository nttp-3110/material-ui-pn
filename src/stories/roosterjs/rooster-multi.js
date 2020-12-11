import React from 'react';
import RoosterReact from '../../components/RoosterEditor';

import 'katex/dist/katex.min.css';

export const Rooster = ({ height }) => {
    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const [content, setContent] = React.useState(null);
    const [content2, setContent2] = React.useState(null);
    return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
        <RoosterReact ref={ref1} height={height} />
        <br />
        <RoosterReact ref={ref2} height={height} />
        <br />
        <div>
            <button onClick={() => {
                setContent(ref1.current.getContent());
                setContent2(ref2.current.getContent());
            }}>Show Render HTML</button>
            <br />
            <label>Content 1: </label>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <label>Content 2: </label>

            <div dangerouslySetInnerHTML={{ __html: content2 }} />
        </div>

    </div>;
};