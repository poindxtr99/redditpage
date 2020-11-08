import React from 'react';

const BodyText = (props) => {
    const formattedText = props.mainText.split('\n').map((item, key) => {
        return <span key={key}>{item}<br/></span>
    });
    return <div>{formattedText}</div>;
}

export default BodyText;