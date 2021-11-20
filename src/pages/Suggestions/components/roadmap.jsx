import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@chakra-ui/react";
import PointList from "./pointList";
import '../styles/roadmap.css';

import data from '../../../data';

const Roadmap = () => {

    const [feedbacks, setFeedbacks] = useState(data);
    const roadmap = feedbacks.map(x => x.status);
    const filteredRoadmap = [... new Set(roadmap)]

    const roadmapColor = (type) => {
        if (type === 'Planned') {
            return "#F49F85"
        }
        if (type === 'Live') {
            return "#AD1FEA"
        }
        if (type === 'In-Progress') {
            return "#62BCFA"
        }
    }

    const roadmapCount = (type) => {
        if (type === 'Planned') {
            return feedbacks.filter(status => status.status === 'Planned').length
        }
        if (type === 'Live') {
            return feedbacks.filter(status => status.status === 'Live').length
        }

        if (type === 'In-Progress') {
            return feedbacks.filter(status => status.status === 'In-Progress').length
        }
    }


    return (
        <>
            <div className="roadmap-container">
                <div className="roadmap-top">
                    <h1>Roadmap</h1>
                    <Link to="/roadmap">
                        <p className="link">View</p>
                    </Link>
                </div>
                <List spacing={3} className="list">
                    {
                        filteredRoadmap.map(r =>
                            <ListItem>
                                <PointList title={r} color={roadmapColor(r)} number={roadmapCount(r)} />
                            </ListItem>
                        )
                    }
                </List>
            </div>
        </>
    )
}

export default Roadmap;