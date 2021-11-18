import React from "react";
import Profile from "./components/profile";
import Tags from "./components/tags";
import './styles/suggestion.css';

const Suggestion = () => {
    return (
        <>
            <div className="suggest">
                <Profile />
                <Tags />
            </div>
        </>
    )
}

export default Suggestion;