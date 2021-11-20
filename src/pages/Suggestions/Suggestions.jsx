import React, { useState } from "react";
import Profile from "./components/profile";
import Tags from "./components/tags";
import Roadmap from "./components/roadmap";
import SuggestionsCard from "./components/suggestionsCard";
import SuggestionBar from "./components/suggestionBar";
import './styles/suggestion.css';
import data from "../../data";
import { useSelector, useDispatch } from 'react-redux'
import {rdxfeedbackactions } from '../../redux/reducers/feedback';
const Suggestion = () => {
    const [feedbacks, setFeedbacks] = useState([...useSelector(state=>state.feedback.feedbacks)]);
    const [feedbackscopy, setFeedbackscopy] = useState([...useSelector(state=>state.feedback.feedbacks)]);
    const handleFeebackFilter = (filtercategory) => {
        if (filtercategory === "All") {
            setFeedbacks(feedbackscopy);
        }
        else {
            setFeedbacks(feedbacks.filter(fb => {
                return fb.category === filtercategory
            }))
        }
    }
    const handleSortBar = (typeofSort) => {
        if (typeofSort === "Most Upvote") {


            const sortedArray = feedbacks.sort((a, b) => {
                if (parseInt(a.vote) < parseInt(b.vote)) {
                    return 1;
                }
                if (parseInt(a.vote) > parseInt(b.vote)) {
                    return -1;
                }
                return 0;
            })
            setFeedbacks([...sortedArray]);

        }

        if (typeofSort === "Least Upvote") {
            const sortedArray = feedbacks.sort((a, b) => {
                if (parseInt(a.vote) > parseInt(b.vote)) {
                    return 1;
                }
                if (parseInt(a.vote) < parseInt(b.vote)) {
                    return -1;
                }
                return 0;
            })
            setFeedbacks([...sortedArray]);

        }

        if (typeofSort === "Most Comments") {
            const sortedArray = feedbacks.sort((a, b) => {
                if (a.comment.length < b.comment.length) {
                    return 1;
                }
                if (a.comment.length > b.comment.length) {
                    return -1;
                }
                return 0;
            })
            setFeedbacks([...sortedArray]);
        }

        if (typeofSort === "Least Comments") {
            const sortedArray = feedbacks.sort((a, b) => {
                if (a.comment.length > b.comment.length) {
                    return 1;
                }
                if (a.comment.length < b.comment.length) {
                    return -1;
                }
                return 0;
            })
            setFeedbacks([...sortedArray]);
        }
    }
    return (
        <>
            <div className="suggest">
                <div className="suggest-left">
                    <Profile />
                    <Tags updatefilter={handleFeebackFilter} />
                    <Roadmap />
                </div>
                <div className="suggest-right">
                    <SuggestionBar suggestions={feedbacks.length} setData={setFeedbacks} updatefilter={handleSortBar} />
                    {
                        feedbacks.map(fb =>
                            <SuggestionsCard key={fb.id + fb.detail + fb.title} title={fb.title} detail={fb.detail} category={fb.category} vote={fb.vote} comment={fb.comment?.length?? []} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Suggestion;