import React, { useState } from 'react';
import { Tag } from "@chakra-ui/react";
import '../styles/tags.css';

import data from '../../../data';

const Tags = (props) => {


    const [feedbacks, setFeedbacks] = useState(data);
    const tags = feedbacks.map(x => x.category);
    const filteredTags = [...new Set(tags)];

    const callFilterParent = (e) =>{
        props.updatefilter(e.target.getAttribute("category"));
    }
    
    return (
        <>
            <div className="tags-container">
            <Tag category={"All"} onClick = {callFilterParent} className="tag" backgroundColor="#F2F4FF" color="#4661E6" fontWeight="semiBold">All</Tag>
                {
                    filteredTags.map(fb =>
                        <Tag key={fb} category={fb} onClick = {callFilterParent} className="tag" backgroundColor="#F2F4FF" color="#4661E6" fontWeight="semiBold">{fb}</Tag>
                    )
                }
            </div>
        </>
    )
}

export default Tags;