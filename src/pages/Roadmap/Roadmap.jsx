import React, { useState } from "react";
import NavRoadmap from "./components/navRoadmap";
import ColumnCardContainer from "./components/columnCardContainer";
import CardRoadmap from "./components/cardRoadmap";
import './styles/roadmap.css';

import data from '../../data';

const Roadmap = () => {
    const [feedbacks, setFeedbacks] = useState(data);

    const planned = feedbacks.filter(status => status.status === 'Planned');
    const live = feedbacks.filter(status => status.status === 'Live');
    const inprogress = feedbacks.filter(status => status.status === 'In-Progress');
    const array = (type) => {
        if (type === 'Planned') {
            return feedbacks.filter(status => status.status === 'Planned')
        }
        if (type === 'Live') {
            return feedbacks.filter(status => status.status === 'Live')
        }

        if (type === 'In-Progress') {
            return feedbacks.filter(status => status.status === 'In-Progress')
        }
    }

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

    return (
        <>
            <div className="roadmap">
                <div className="roadmap-content">
                    <NavRoadmap />
                    <div className="roadmap-columns">
                        <div className="columncard-container">
                            <h1 className="title">Planned ({planned.length})</h1>
                            <h2 className="subtitle">Ideas prioritized for research</h2>
                            {
                                planned?.map(f => <CardRoadmap title={f.title} description={f.detail} category={f.category} status={f.status} color="#F49F85" comment={f.comment.length} vote={f.vote.length} />)
                            }
                        </div>
                        <div className="columncard-container">
                            <h1 className="title">Live ({live.length})</h1>
                            <h2 className="subtitle">Released features</h2>
                            {
                                live?.map(f => <CardRoadmap title={f.title} description={f.detail} category={f.category} status={f.status} color="#62BCFA" comment={f.comment.length} vote={f.vote.length} />)
                            }
                        </div>
                        <div className="columncard-container">
                            <h1 className="title">In Progress ({inprogress.length})</h1>
                            <h2 className="subtitle">Currently being developed</h2>
                            {
                                inprogress?.map(f => <CardRoadmap title={f.title} description={f.detail} category={f.category} status={f.status} color="#AD1FEA" comment={f.comment.length} vote={f.vote.length} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap;