import CommentList from './CommentList';
import './styles/comments.css';
import { FormatScore, FormattedText } from './methods';
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
        this.setState({comments:updatedChildren});
    }

    timeSince = (postTime) => {
        var timeStamp = new Date(postTime * 1000).getTime();
        var now = Date.now();
        const secondsPast = (now - timeStamp) / 1000;
        if (secondsPast < 60) {
            return parseInt(secondsPast) + 'second(s) ago';
        }
        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + 'minute(s) ago';
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + 'hour(s) ago';
        }
        if (secondsPast > 86400) {
            const day = parseInt(secondsPast / 86400);
            if (day > 31) {
                const month = parseInt(day / 31);
                if (month > 11) {
                    const year = parseInt(month / 12);
                    return `${ year } year(s) ago`;
                }
                return `${ month }month(s) ago`;
            }
            return `${ day } day(s) ago`;
        }
    }

    render() {
        return (
            <List.Item>
                <List.Content>
                    <div>
                        <List horizontal>
                            <List.Item as='a'>{this.props.data.author}</List.Item>
                            <List.Item className="comment-score-time">{
                                    `${FormatScore(this.props.data.ups)} points - 
                                    ${this.timeSince(this.props.data.created_utc)}`
                                }
                            </List.Item>
                        </List>
                        <span style={{float:'right', color:'black'}}>
                            <List.Icon onClick={() => this.props.onTrashClick(this.props.data.id)} 
                                name="trash" className="comment-trashcan" />
                        </span>
                    </div>

                    <List.Description>{FormattedText(this.props.data.body)}</List.Description>
                    <List.List className={
                            Object.keys(this.state.comments).length === 0 ? 
                            "comments-hidden" : "comment-list"
                        }>
                        <CommentList comments={this.state.comments} onTrashClick={this.deleteComment} />
                    </List.List>
                </List.Content>
            </List.Item>
            );
    }
}

export default Comment;