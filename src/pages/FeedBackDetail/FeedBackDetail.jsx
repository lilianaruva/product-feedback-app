import React from "react";
import SuggestionsCard from "../Suggestions/components/suggestionsCard";
import CommentContainer from "./components/commentContainer";
import AddComment from "./components/addComment";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import './styles/feedbackDetails.css'

const FeedBackDetails = () => {
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
                        <button className="button-blue">Edit Feedback</button>
                    </div>
                    <SuggestionsCard />
                    <CommentContainer />
                    <AddComment />
                </div>
            </div>
        </>
    )
}

export default FeedBackDetails;