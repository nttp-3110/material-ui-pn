// import React from 'react';
// import RoosterReact from '../../components/RoosterEditor';
// import 'katex/dist/katex.min.css';
// import { ReactComponent as IcnAlignRight } from '../assets/colors.svg';

// export const Rooster = () => {
//     const buttons = {
//         color: {
//             title: 'More options',
//             image: IcnAlignRight,
//             onClick: () => alert('hello')
//         }
//     };
//     const ref = React.useRef();
//     return <div style={{ position: 'absolute', top: 0, bottom: 0 }}>
//         <div style={{ height: '200px' }}>
//             <RoosterReact ref={ref} customButtons={buttons} />
//         </div>
//         <div>
//             <button onClick={() => console.log(ref.current.getContent())}>Get Content</button>
//         </div>

//     </div>;
// };

import React from 'react';
import RoosterReact from '../../components/RoosterEditor';

import 'katex/dist/katex.min.css';
import { ReactComponent as IcnAlignRight } from '../assets/colors.svg';

export const Rooster = () => {
    const ref = React.useRef();
    const [content, setContent] = React.useState(null);

    const buttons = {
        color: {
            title: 'More options',
            image: IcnAlignRight,
            onClick: () => alert('hello')
        }
    };
    return <div style={{ position: 'relative', top: 0, bottom: 0 }}>
        <div style={{ height: '200px' }}>
        <RoosterReact ref={ref} customButtons={buttons} style={{ height: '200px' }}
            className={{}}
        ></RoosterReact>
        </div>

        <button onClick={() => setContent(ref.current.getContent())}>Show Render HTML</button>
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>;
};