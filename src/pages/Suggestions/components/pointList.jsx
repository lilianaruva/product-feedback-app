import React from 'react';
import '../styles/pointList.css';

const PointList = ({ title, color, number }) => {

    const icon = () => (
        <svg viewBox="0 0 200 200" color={color} width="12px">
            <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
        </svg>
    )

    return (
        <>
            <div className="points">
                <div className="points-left">
                    {icon()}
                    <p>{title}</p>
                </div>
                <div className="points-right">
                    <h2>{number}</h2>
                </div>
            </div>
        </>
    )
}

export default PointList;