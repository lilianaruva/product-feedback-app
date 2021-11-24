import React from "react";
import '../styles/suggestionsCard.css'
import { Tag } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { rdxfeedbackactions } from '../../../redux/reducers/feedback';
const SuggestionsCard = ({ title, detail, category, vote, comment, link }) => {

    const dispatch = useDispatch();
    const icon = () => (
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE" />
        </svg>
    )

    const onClickSelecSuggestion = () => {
        console.log(rdxfeedbackactions);
        const selectedFeedback = { title, detail, category, vote, comment }
        dispatch(rdxfeedbackactions.changeSelectedFeedback({ selectedFeedback: selectedFeedback }));
    }
    return (
        <>
            <div className="suggestionsCard-container">
                <div className="sC-number">
                    <ChevronUpIcon w={5} h={5} color="#4661E6" />
                    <h2>{vote}</h2>
                </div>
                <div className="sC-content">
                    <div onClick={onClickSelecSuggestion}>
                        {
                            link ?
                                <Link to="/feedback-detail">
                                    <h1>{title}</h1>
                                </Link> :
                                <h1>{title}</h1>}
                    </div>
                    <p>{detail}</p>
                    <Tag className="tag" backgroundColor="#F2F4FF" color="#4661E6" fontWeight="semiBold">{category}</Tag>
                </div>
                <div className="sC-comments">
                    {icon()}
                    <h2>{comment}</h2>
                </div>
            </div>
        </>
    )
}

export default SuggestionsCard;