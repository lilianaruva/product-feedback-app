import React from "react";
import Profile from "./components/profile";
import Tags from "./components/tags";
import Roadmap from "./components/roadmap";
import SuggestionsCard from "./components/suggestionsCard";
import './styles/suggestion.css';

const Suggestion = () => {
    return (
        <>
            <div className="suggest">
                <Profile />
                <Tags />
                <Roadmap />
                <SuggestionsCard />
            </div>
        </>
    )
}

export default Suggestion;