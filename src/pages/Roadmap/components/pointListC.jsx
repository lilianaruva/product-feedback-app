import React from 'react';
import '../styles/pointList.css';

const PointListC = ({ title}) => {

    const icon = () => (
        <svg viewBox="0 0 300 300" color="#F49F85" width="11px">
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