import React from 'react';
import { Tag } from "@chakra-ui/react";
import PointListC from '../components/pointListC';
import ButtonNumber from '../components/buttonNumber';
import CommentComponent from '../components/commentComponent';

import '../styles/cardRoadmap.css'

const cardRoadmap = () => {
    return (
        <>
            <div className="card-container">
                <div className="card-line"></div>
                <div className="card-content">
                    <PointListC title="Planned"/>
                    <h2>More comprehensive reports</h2>
                    <p>It would be great to see a more detailed breakdown of solutions.</p>
                    <Tag className="tag" backgroundColor="#F2F4FF" color="#4661E6" fontWeight="semiBold">Sample</Tag>
                    <div className="card-bottom">
                        <ButtonNumber number="123"/>
                        <CommentComponent number="2"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardRoadmap