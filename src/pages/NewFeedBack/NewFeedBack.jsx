import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { FormLabel, ButtonGroup, Box, Button, useToast } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import './newFeedback.css';
import { useDispatch } from 'react-redux'
import { rdxfeedbackactions } from '../../redux/reducers/feedback';
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { InputControl, SelectControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
const NewFeedBack = (props) => {

    const dispatch = useDispatch();

    const toast = useToast();

    const onSubmit = (values, errors) => (e) => {
        e.preventDefault();
        var size = Object.keys(errors).length;

        if (values.title !== '' && values.detail !== '' && values.category !== '') {
            if (!size > 0) {
                dispatch(rdxfeedbackactions.addFeedback({ feedback: values }));
                toast({
                    title: "Feedback created.",
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
        id: uuidv4(),
        title: "",
        category: "",
        detail: "",
        vote: "0",
        status: "Planned",
        comment: [],

    };
    const validationSchema = Yup.object({
        title: Yup.string().required(),
        category: Yup.string().required(),
        detail: Yup.string().required(),
    });

    const icon = () => (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1342)" />
            <path d="M30.3425 36V30.1657H36.0295V25.8637H30.3425V20H25.7459V25.8637H20V30.1657H25.7459V36H30.3425Z" fill="white" />
            <defs>
                <radialGradient id="paint0_radial_0_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
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
                        <Link to="/">
                            <p>Go Back</p>
                        </Link>
                    </div>
                </div>
                <div className="circle-icon">
                    {icon()}
                </div>
                <div className="feedback-form">
                    <h1>Create New Feedback</h1>
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
                                <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="detail">Feedback Detail</FormLabel>
                                <FormLabel fontSize="14px" htmlFor="detail" color="#647196">Include any specific comments on what should be improved, added, etc.</FormLabel>
                                <TextareaControl name="detail" className="input" />
                                <br />
                                <div className="button-group">
                                    <ButtonGroup>
                                        <Link to="/">
                                            <Button className="button-cancel" backgroundColor="#3A4374">Cancel</Button>
                                        </Link>
                                        <SubmitButton className="button-purplelarge" backgroundColor="#AD1FEA">Add Feedback</SubmitButton>
                                    </ButtonGroup>
                                </div>
                            </Box>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default NewFeedBack;