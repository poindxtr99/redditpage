import './styles/bodytext.css';
import { FormattedText } from './methods';
import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';


const BodyText = (props) => {
    return (
        <Segment className="main-body" padded='true'>
            <div>{FormattedText(props.mainText)}</div>
            <Header sub='true' size='tiny'>
                <Icon flipped='horizontally' name='comment alternate' />
                <Header.Content>{`${props.commentCount} Comments`}</Header.Content>
            </Header>
        </Segment>
    );
}

export default BodyText;