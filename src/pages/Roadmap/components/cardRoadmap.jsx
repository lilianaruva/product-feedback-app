import React from 'react';
import { Tag } from "@chakra-ui/react";
import PointListC from '../components/pointListC';
import ButtonNumber from '../components/buttonNumber';
import CommentComponent from '../components/commentComponent';

import '../styles/cardRoadmap.css'

const cardRoadmap = ({ title, description, category, status, color, comment, vote }) => {

    return (
        <>
            <div className="card-container">
                <div className={`card-line-purple`} style={{backgroundColor: color}}></div>
                <div className="card-content">
                    <PointListC title={status} color={color} />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Tag className="tag" backgroundColor="#F2F4FF" color="#4661E6" fontWeight="semiBold">{category}</Tag>
                    <div className="card-bottom">
                        <ButtonNumber number={vote} />
                        <CommentComponent number={comment} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardRoadmap