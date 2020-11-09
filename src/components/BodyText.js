import './styles/bodytext.css';
import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';


const BodyText = (props) => {
    const formattedText = props.mainText.split('\n').map((item, key) => {
        return <span key={key}>{item}<br/></span>
    });
    return (
        <Segment className="main-body" secondary='true' padded='very'>
            <div>{formattedText}</div>
            <Header size='tiny'>
                <Icon name='comment alternate' />
                <Header.Content>{`${props.commentCount} Comments`}</Header.Content>
            </Header>
        </Segment>
    );
}

export default BodyText;