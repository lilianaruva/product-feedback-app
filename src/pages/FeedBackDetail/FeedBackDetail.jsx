import React from "react";
import SuggestionsCard from "../Suggestions/components/suggestionsCard";
import CommentContainer from "./components/commentContainer";
import AddComment from "./components/addComment";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { rdxfeedbackactions } from "../../redux/reducers/feedback";
import './styles/feedbackDetails.css'
import { useSelector, useDispatch } from 'react-redux'

const FeedBackDetails = () => {
    const dispatch = useDispatch();
    const feedback = useSelector(state => state.feedback.selectedFeedback);

    const onClickSelecSuggestion = () => {
        dispatch(rdxfeedbackactions.changeSelectedFeedback({ selectedFeedback: feedback }));
    }

    return (
        <>
            <div className="feedback-details">
                <div className="feedback-content">
                    <div className="feedback-top">
                        <div className="goBack">
                            <div className="goBack-link">
                                <ChevronLeftIcon color="#4661E6" />
                                <Link to="/">
                                    <p>Go Back</p>
                                </Link>
                            </div>
                        </div>
                        <Link to="/edit-feedback">
                            <button onClick={onClickSelecSuggestion} className="button-blue">Edit Feedback</button>
                        </Link>
                    </div>
                    <SuggestionsCard id={feedback.id}  title={feedback.title} status={feedback.status} detail={feedback.detail} category={feedback.category} vote={feedback.vote} comment={feedback.comment} />
                    <CommentContainer />
                    <AddComment />
                </div>
            </div>
        </>
    )
}

export default FeedBackDetails;