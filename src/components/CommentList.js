import Comment from './Comment';
import React from 'react';
import { List } from 'semantic-ui-react';

const CommentList = (props) => {

    const comments = props.comments.map((comment) => {
        return <Comment key={comment.id} data={comment}/>
    });

    return <List>{comments}</List>
}

export default CommentList;