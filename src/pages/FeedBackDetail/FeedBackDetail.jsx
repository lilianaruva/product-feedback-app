import React from "react";
import SuggestionsCard from "../Suggestions/components/suggestionsCard";
import CommentContainer from "./components/commentContainer";
import AddComment from "./components/addComment";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import './styles/feedbackDetails.css'
import { useSelector } from 'react-redux'

const FeedBackDetails = () => {
    const feedback = useSelector(state => state.feedback.selectedFeedback);

    return (
        <>
            <div className="feedback-details">
                <div className="feedback-content">
                    <div className="feedback-top">
                        <div className="goBack">
                            <ChevronLeftIcon color="#4661E6" />
                            <Link to="/">
                                <a>Go Back</a>
                            </Link>
                        </div>
                        <Link to="/edit-feedback">
                        <button className="button-blue">Edit Feedback</button>
                        </Link>
                    </div>
                    <SuggestionsCard title={feedback.title} detail={feedback.detail} category={feedback.category}vote={feedback.vote} comment={feedback.comment} />
                    <CommentContainer />
                    <AddComment />
                </div>
            </div>
        </>
    )
}

export default FeedBackDetails;