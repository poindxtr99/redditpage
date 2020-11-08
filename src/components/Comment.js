//import CommentList from './CommentList';
import './styles/comments.css';
import React, {Component} from 'react';
import { List } from 'semantic-ui-react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <List.Item>
                <List.Content>
                    <List.Header>
                        {this.props.data.author}
                        <span style={{float:'right'}}>
                            <List.Icon name="trash" />
                        </span>
                    </List.Header>
                    <List.Description>{this.props.data.body}</List.Description>
                </List.Content>
            </List.Item>
            );
    }
}

export default Comment;