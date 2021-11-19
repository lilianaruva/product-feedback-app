import React from 'react';
import Comment from '../components/comment';
import '../styles/commentContainer.css';

const CommentContainer = () => {
    return (
        <>
            <div className="comment-container-base">
                <h1 className="title">Comment</h1>
                <div className="comment-container-body">
                    <Comment name="Elijah Moss" username="@hexagon.bestagon" comment="Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has." />
                </div>
            </div>
        </>
    )
}

export default CommentContainer;