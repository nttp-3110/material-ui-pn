import React from 'react';
import RoosterReact from '../../components/RoosterEditor';
import InputComponent from '../../components/RoosterEditor/shared/utils/InputComponent';

import 'katex/dist/katex.min.css';

export const Rooster = ({ ...rest }) => {
    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const [content, setContent] = React.useState(null);
    const [content2, setContent2] = React.useState(null);
    return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
        <InputComponent
            ref={ref1}
            Component={RoosterReact}
            label={'Editor 1'}
        />
        <br />
        <InputComponent
            ref={ref2}
            Component={RoosterReact}
            label={'Editor 2'}
        />
        <br />
        <div>
            <button onClick={() => {
                setContent(ref1.current.editor.getContent());
                setContent2(ref2.current.editor.getContent());
            }}>Show Render HTML</button>
            <button onClick={() => {
                const editor1 = ref1.current.editor.getEditor();
                const editor2 = ref2.current.editor.getEditor();
                editor1.setContent('');
                editor2.setContent('');
                setContent('');
                setContent2('');
            }}>Reset</button>
            <br />
            <label>Content 1: </label>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <label>Content 2: </label>

            <div dangerouslySetInnerHTML={{ __html: content2 }} />
        </div>

    </div>;
};