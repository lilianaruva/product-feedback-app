import React from "react";
import SuggestionsCard from "../Suggestions/components/suggestionsCard";
import Comment from "./components/comment";
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
                    <Comment name="Elijah Moss" username="@hexagon.bestagon" comment="Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has." />
                    <AddComment />
                </div>
            </div>
        </>
    )
}

export default FeedBackDetails;