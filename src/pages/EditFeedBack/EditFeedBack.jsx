import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { FormLabel, ButtonGroup, Box, Button, useToast } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { rdxfeedbackactions } from '../../redux/reducers/feedback';
import './editfeedback.css';
import * as Yup from "yup";
import { InputControl, SelectControl, SubmitButton, TextareaControl } from "formik-chakra-ui";


const EditFeedBack = () => {
    const feedback = useSelector(state => state.feedback.selectedFeedback);

    const dispatch = useDispatch();

    const toast = useToast();

    const onSubmit = (values, errors) => (e) => {
        e.preventDefault();
        var size = Object.keys(errors).length;
        if (values.title !== '' && values.detail !== '' && values.category !== '') {
            if (!size > 0) {
                let feedbackCopy = JSON.parse(JSON.stringify(feedback));
                Object.assign(feedbackCopy, values);
                dispatch(rdxfeedbackactions.updateFeedback({ feedback: feedbackCopy }));
                toast({
                    title: "Feedback was updated succesfully",
                    position: "top-right",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
            } else {
                toast({
                    title: "Error",
                    position: "top-right",
                    description: "Inputs must not be empty",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            }
        } else {
            toast({
                title: "Error",
                position: "top-right",
                description: "Inputs must not be empty",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
    };

    const initialValues = {
        id: feedback.id,
        title: feedback.title,
        category: feedback.category,
        detail: feedback.detail,
        vote: feedback.vote,
        status: feedback.status,
        comment: feedback.comment,
    };
    const validationSchema = Yup.object({
        title: Yup.string().required(),
        category: Yup.string().required(),
        detail: Yup.string().required(),
    });


    const icon = () => (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1239)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z" fill="white" />
            <defs>
                <radialGradient id="paint0_radial_0_1239" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
                    <stop stopColor="#E84D70" />
                    <stop offset="0.530886" stopColor="#A337F6" />
                    <stop offset="1" stopColor="#28A7ED" />
                </radialGradient>
            </defs>
        </svg>
    )

    return (
        <>
            <div className="newFeedback">
                <div className="goBack">
                    <div className="goBack-link">
                        <ChevronLeftIcon color="#4661E6" />
                        <Link to="/feedback-detail">
                            <p>Go Back</p>
                        </Link>
                    </div>
                </div>
                <div className="circle-icon">
                    {icon()}
                </div>


                <div className="feedback-form">
                    <h1>Editing '{feedback.title}'</h1>
                    <br />
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ handleSubmit, values, errors }) => (
                            <Box
                                as="form"
                                onSubmit={onSubmit(values, errors)}
                            >
                                <FormLabel fontWeight="bold" margin="0" fontSize="14px" htmlFor="title">Feedback Title</FormLabel>
                                <FormLabel fontSize="14px" htmlFor="title" color="#647196">Add a short, descriptive headline</FormLabel>
                                <InputControl name="title" className="input" />
                                <br />
                                <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="category">Category</FormLabel>
                                <FormLabel fontSize="14px" htmlFor="category" color="#647196">Choose a category for your feedback</FormLabel>
                                <SelectControl
                                    name="category"
                                    selectProps={{ placeholder: "Select option" }}
                                >
                                    <option value="Feature">Feature</option>
                                    <option value="UI">UI</option>
                                    <option value="UX">UX</option>
                                    <option value="Enhancement">Enhancement</option>
                                    <option value="Bug">Bug</option>
                                </SelectControl>
                                <br />
                                <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="status">Update Status</FormLabel>
                                <FormLabel fontSize="14px" htmlFor="status" color="#647196">Change feature state</FormLabel>
                                <SelectControl
                                    name="status"
                                    selectProps={{ placeholder: "Select option" }}
                                >
                                    <option value="Planned">Feature</option>
                                    <option value="In-Progress">In-Progress</option>
                                    <option value="Live">Live</option>
                                </SelectControl>
                                <br />
                                <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="detail">Feedback Detail</FormLabel>
                                <FormLabel fontSize="14px" htmlFor="detail" color="#647196">Include any specific comments on what should be improved, added, etc.</FormLabel>
                                <TextareaControl name="detail" className="input" />
                                <br />
                                <div className="button-group">

                                    <div className="button-left">
                                        <Link to="/feedback-detail">
                                            <button className="button-delete">Delete</button>
                                        </Link>
                                    </div>
                                    <div className="button-right">
                                        <Link to="/">
                                            <Button className="button-cancel" backgroundColor="#3A4374">Cancel</Button>
                                        </Link>
                                        <SubmitButton className="button-purplelarge" backgroundColor="#AD1FEA">Add Feedback</SubmitButton>
                                    </div>

                                </div>
                            </Box>
                        )}
                    </Formik>
                </div>
            </div>
        </>

    )
}

export default EditFeedBack