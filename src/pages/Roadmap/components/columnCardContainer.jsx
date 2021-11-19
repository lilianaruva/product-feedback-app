import React from 'react';
import '../styles/columnCardContainer.css';
import CardRoadmap from '../components/cardRoadmap';

const ColumnCardContainer = ({ title, subtitle }) => {
    return (
        <>
            <div className="columncard-container">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
                <CardRoadmap />
                <CardRoadmap />
            </div>
        </>
    )
}

export default ColumnCardContainer;