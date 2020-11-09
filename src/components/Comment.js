import CommentList from './CommentList';
import './styles/comments.css';
import { FormatScore } from './methods';
import React, {Component} from 'react';
import { List } from 'semantic-ui-react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: this.props.data.children};
    }

    deleteComment = (id) => {
        let updatedChildren = this.state.comments;
        delete updatedChildren[id];
        this.setState({comments:updatedChildren})
        this.setState({comments:updatedChildren});
    }

    timeSince = (postTime) => {
        var timeStamp = new Date(postTime);
        var now = new Date();
        const secondsPast = (now.getTime() - timeStamp) / 1000;
        if (secondsPast < 60) {
            return parseInt(secondsPast) + 's';
        }
        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + 'm';
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + 'h';
        }
        if (secondsPast > 86400) {
            const day = timeStamp.getDate();
            const month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
            const year = timeStamp.getFullYear() == now.getFullYear() ? "" : " " + timeStamp.getFullYear();
            return day + " " + month + year;
        }
    }

    render() {
        return (
            <List.Item>
                <List.Content>
                    <div>
                        <List horizontal>
                            <List.Item as='a'>{this.props.data.author}</List.Item>
                            <List.Item>{`${FormatScore(this.props.data.ups)} points - ${this.timeSince(this.props.data.created_utc)}`}</List.Item>
                        </List>
                        <span style={{float:'right', color:'black'}}>
                            <List.Icon onClick={() => this.props.onTrashClick(this.props.data.id)} name="trash" className="comment-trashcan" />
                        </span>
                    </div>

                    <List.Description>{this.props.data.body}</List.Description>
                    <List.List>
                        <CommentList comments={this.state.comments} onTrashClick={this.deleteComment} />
                    </List.List>
                </List.Content>
            </List.Item>
            );
    }
}

export default Comment;