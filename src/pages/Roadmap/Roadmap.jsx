import React from "react";
import NavRoadmap from "./components/navRoadmap";
import ColumnCardContainer from "./components/columnCardContainer";

import './styles/roadmap.css';

const Roadmap = () => {
    return (
        <>
            <div className="roadmap">
                <div className="roadmap-content">
                    <NavRoadmap />
                    <div className="roadmap-columns">
                        <ColumnCardContainer title="Planned (2)" subtitle="Ideas prioritized for research" />
                        <ColumnCardContainer title="Planned (2)" subtitle="Ideas prioritized for research" />
                        <ColumnCardContainer title="Planned (2)" subtitle="Ideas prioritized for research" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap;