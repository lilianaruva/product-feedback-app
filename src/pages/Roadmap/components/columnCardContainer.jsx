import React, { useState } from 'react';
import '../styles/columnCardContainer.css';
import CardRoadmap from '../components/cardRoadmap';

import data from '../../../data';


const ColumnCardContainer = ({ title, subtitle, array }) => {

    const [feedbacks, setFeedbacks] = useState(data);
    const [cards, setCards] =useState();
    const status = feedbacks.map(x => x.status);
    const filteredStatus = [... new Set(status)]

    
    console.log(typeof(array))

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
            const t = feedbacks.filter(status => status.status === 'Planned').length
            return 'Planned (' + t + ')';
        }
        if (type === 'Live') {
            const t = feedbacks.filter(status => status.status === 'Live').length
            return 'Live (' + t + ')';
        }

        if (type === 'In-Progress') {
            const t = feedbacks.filter(status => status.status === 'In-Progress').length
            return 'In-Progress (' + t + ')';
        }
    }


    // title, description, category, status, color, comment, vote 
    return (
        <>
            <div className="columncard-container">
                <h1 className="title">{roadmapCount(title)}</h1>
                <h2 className="subtitle">{subtitle}</h2>
                {
                    cards?.map(f => <CardRoadmap title={f} description={f} category={f} status={f} color={roadmapColor(f)} comment={f} vote={f} />)
                }
            </div>
        </>
    )
}

export default ColumnCardContainer;