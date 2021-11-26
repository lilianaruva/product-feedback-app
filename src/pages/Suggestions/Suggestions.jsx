import React, { useState, useEffect } from "react";
import Profile from "./components/profile";
import Tags from "./components/tags";
import Roadmap from "./components/roadmap";
import SuggestionsCard from "./components/suggestionsCard";
import SuggestionBar from "./components/suggestionBar";
import SuggestionCardMobile from "./components/mobile/suggestionCardMobile";
import ProfileMobile from "./components/mobile/profileMobile";
import './styles/suggestion.css';
import { useSelector } from 'react-redux';

const Suggestion = () => {
    const [menuStatus, setMenuStatus] = useState(false); //menu toggle


    const [width, setWindowWidth] = useState(0); //set window state
    const [feedbacks, setFeedbacks] = useState([...useSelector(state => state.feedback.feedbacks)]);
    const [feedbackscopy, setFeedbackscopy] = useState([...useSelector(state => state.feedback.feedbacks)]);
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

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const mobileVersion = {
        showMobileVersion: width <= 375
    }

    return (
        <>
            <div className="suggest">
                {
                    window.screen.width >= 376 ?
                        <div className="suggest-left">
                            <Profile />
                            <Tags updatefilter={handleFeebackFilter} />
                            <Roadmap />
                        </div> :
                        <div className="suggest-left">
                            <ProfileMobile menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
                            <div className={`menu-container ${menuStatus ? "active-menu" : ""}`}>
                                <Tags updatefilter={handleFeebackFilter} />
                                <Roadmap />
                            </div>
                        </div>
                }
                <div className="suggest-right">
                    <SuggestionBar suggestions={feedbacks.length} setData={setFeedbacks} updatefilter={handleSortBar} />
                    {
                        window.screen.width >= 376 ?
                            feedbacks.map(fb =>
                                <SuggestionsCard key={fb.id} id={fb.id} title={fb.title} detail={fb.detail} category={fb.category} vote={fb.vote} comment={fb?.comment.length > 0 ? fb.comment : []} status={fb.status} link="true" />
                            ) :
                            feedbacks.map(fb =>
                                <SuggestionCardMobile key={fb.id} id={fb.id} title={fb.title} detail={fb.detail} category={fb.category} vote={fb.vote} comment={fb?.comment.length > 0 ? fb.comment : []} status={fb.status} link="true" />
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default Suggestion;