import React from 'react';
import '../styles/navRoadmap.css';
import {SmallAddIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const NavRoadmap = () =>{

    return(
        <>
        <div className="nav-container">
            <div className="nav-left">
                <ChevronLeftIcon/>
                <a>Go Back</a>
                <h1>Roadmap</h1>
            </div>
            <button className="button-purple"><SmallAddIcon/>Add Feedback</button>
        </div>
        </>
    )
}

export default NavRoadmap;