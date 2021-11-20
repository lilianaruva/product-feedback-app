import React from 'react';
import '../styles/pointList.css';

const PointListC = ({ title, color }) => {

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
            <div className="point">
                {icon()}
                <p>{title}</p>
            </div>
        </>
    )
}

export default PointListC;