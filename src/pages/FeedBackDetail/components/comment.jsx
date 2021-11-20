import React from 'react';
import '../styles/comment.css'

const Comment = ({ name, username, comment }) => {
    return (
        <>
            <div className="comment-container">
                <div className="comment-image">
                    <img alt="user" src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"></img>
                </div>
                <div className="comment-content">
                    <div className="comment-top">
                        <div className="comment-user">
                            <h3 className="username-comment">{name}</h3>
                            <p>{username}</p>
                        </div>
                        <h2 className="reply">Reply</h2>
                    </div>
                    <p className="comment-body">{comment}</p>
                </div>
            </div>
        </>
    )
}

export default Comment;