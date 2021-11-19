import React from 'react';
import { Link } from "react-router-dom";
import '../styles/navRoadmap.css';
import { SmallAddIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const NavRoadmap = () => {

    return (
        <>
            <div className="nav-container">
                <div className="nav-left">
                    <ChevronLeftIcon />
                    <Link to="/">
                        <a>Go Back</a>
                    </Link>
                    <h1>Roadmap</h1>
                </div>
                <Link to="/add-feedback">
                    <button className="button-purple"><SmallAddIcon />Add Feedback</button>
                </Link>
            </div>
        </>
    )
}

export default NavRoadmap;