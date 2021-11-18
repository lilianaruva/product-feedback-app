import React from "react";
import '../styles/suggestionsCard.css'
import { Tag } from "@chakra-ui/react";
import { ChevronUpIcon, ChatIcon } from "@chakra-ui/icons";

const SuggestionsCard = () => {
    return (
        <>
            <div className="suggestionsCard-container">
                <div className="sC-number">
                    <ChevronUpIcon w={5} h={5} color="#4661E6" />
                    <h2>112</h2>
                </div>
                <div className="sC-content">
                    <h1>Add tags for solutions</h1>
                    <p>Easier to search for solutions based on a specific stack.</p>
                    <Tag className="tag" backgroundColor="#F2F4FF" color="#4661E6" fontWeight="semiBold">Enhancement</Tag>
                </div>
                <div className="sC-comments">
                    <ChatIcon color="#CDD2EE" />
                    <h2>2</h2>
                </div>
            </div>
        </>
    )
}

export default SuggestionsCard;