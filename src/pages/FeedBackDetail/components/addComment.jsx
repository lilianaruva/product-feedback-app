import React from 'react';
import { Textarea } from "@chakra-ui/react"

import '../styles/addComment.css';

const AddComment = () =>{
    return (
        <>
        <div className="addComment-container">
            <h1 className="title">Add Comment</h1>
            <br/>
            <Textarea backgroundColor="#F7F8FD" variant="filled" placeholder="Type your comment here" />
            <div className="addComment-bottom">
                <p className="countCharacters">Characters left</p>
                <button className="button-purple">Post Comment</button>
            </div>
        </div>
        </>
    )
}

export default AddComment;