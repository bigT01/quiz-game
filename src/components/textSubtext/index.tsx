import React from 'react';
import './index.scss';

type TextSubtextProps = {
    text: string,
    subText: string
}
const TextSubtext = ({text, subText}: TextSubtextProps) => {
    return (
        <div className='main-header'>
            <h5>{text}</h5>
            <p>{subText}</p>
        </div>
    );
};

export default TextSubtext;