import React, { useState, useEffect } from "react";
import Profile from "./components/profile";
import Tags from "./components/tags";
import Roadmap from "./components/roadmap";
import SuggestionsCard from "./components/suggestionsCard";
import SuggestionBar from "./components/suggestionBar";
import './styles/suggestion.css';

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

import data from "../../data";

const Suggestion = () => {

    const [feedbacks, setFeedbacks] = useState(data);


    console.log(feedbacks);
    console.log(
        feedbacks?.map(
                feedback => console.log(feedback)
            ));


    useEffect(() => {
        /*const getData = async() => {
            const feedbacks = await getDocs(collection(db, "feedback"));
            console.log(feedbacks.docs);
        }
        getData();*/
    }, []);

    return (
        <>
            <div className="suggest">
                <div className="suggest-left">
                    <Profile />
                    <Tags />
                    <Roadmap />
                </div>
                <div className="suggest-right">
                    <SuggestionBar />
                    {
                        feedbacks.map(fb =>
                            <SuggestionsCard title={fb.title} detail={fb.detail} category={fb.category} vote={fb.vote}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Suggestion;