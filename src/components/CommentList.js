import './styles/comments.css';
import Comment from './Comment';
import React from 'react';
import { Container, List } from 'semantic-ui-react';

const CommentList = ({comments, onTrashClick}) => {
    const commentsList = Object.entries(comments).map((comment) => {
        return <Comment onTrashClick={onTrashClick} key={comment[1].id} data={comment[1]}/>
    });

    return (
        <List className="comment-list">
            <Container>
                {commentsList}
            </Container>
        </List>
    );
}

export default CommentList;