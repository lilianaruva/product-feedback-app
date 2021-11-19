import React from "react";
import SuggestionsCard from "../Suggestions/components/suggestionsCard";
import CommentContainer from "./components/commentContainer";
import AddComment from "./components/addComment";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import './styles/feedbackDetails.css'

const FeedBackDetails = () => {
    return (
        <>
            <div className="feedback-details">
                <div className="feedback-content">
                    <div className="feedback-top">
                        <div className="goBack">
                            <ChevronLeftIcon color="#4661E6" />
                            <a>Go Back</a>
                        </div>
                        <button className="button-blue">Edit Feedback</button>
                    </div>
                    <SuggestionsCard styles={{ maxWidth: "720px" }} />
                    <CommentContainer/>
                    <AddComment />
                </div>
            </div>
        </>
    )
}

export default FeedBackDetails;