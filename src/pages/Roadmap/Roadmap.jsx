import React from "react";
import NavRoadmap from "./components/navRoadmap";
import CardRoadmap from "./components/cardRoadmap";

import './styles/roadmap.css';

const Roadmap = () =>{
    return(
        <>
        <div className="roadmap">
            <NavRoadmap/>
            <CardRoadmap/>
        </div>
        </>
    )
}

export default Roadmap;