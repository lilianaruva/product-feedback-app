import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, FormErrorMessage, Input, Select, Textarea} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import './styles/editfeedback.css'

const EditFeedBack = () => {
    const icon = () => (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1239)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z" fill="white" />
            <defs>
                <radialGradient id="paint0_radial_0_1239" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
                    <stop stop-color="#E84D70" />
                    <stop offset="0.530886" stop-color="#A337F6" />
                    <stop offset="1" stop-color="#28A7ED" />
                </radialGradient>
            </defs>
        </svg>
    )

    function validateInputs(value) {
        let error
        if (!value) {
            error = "Name is required"
        }
        return error
    }

    return (
        <>
            <div className="newFeedback">
                <div className="goBack">
                    <ChevronLeftIcon color="#4661E6" />
                    <Link to="/feedback-detail">
                        <a>Go Back</a>
                    </Link>
                </div>
                <div className="circle-icon">
                    {icon()}
                </div>


                <div className="feedback-form">
                    <h1>Editing '...'</h1>
                    <br />
                    <Formik
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2))
                                actions.setSubmitting(false)
                            }, 1000)
                        }}
                    >
                        {(props) => (
                            <Form>
                                <Field name="name" validate={validateInputs}>
                                    {({ field, form }) => (
                                        <FormControl className="form-control" isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel fontWeight="bold" margin="0" fontSize="14px" htmlFor="name">Feedback Title</FormLabel>
                                            <FormLabel fontSize="14px" htmlFor="name" color="#647196">Add a short, descriptive headline</FormLabel>
                                            <Input className="input-form" width="458px" {...field} variant="filled" backgroundColor="#F7F8FD" id="name" />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <FormControl id="country">
                                    <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="name">Category</FormLabel>
                                    <FormLabel fontSize="14px" htmlFor="name" color="#647196">Choose a category for your feedback</FormLabel>
                                    <Select width="458px" backgroundColor="#F7F8FD" marginBottom="1rem">
                                        <option>Feature</option>
                                        <option>UI</option>
                                        <option>UX</option>
                                    </Select>
                                </FormControl>
                                <FormControl id="updateStatus">
                                    <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="name">Update Status</FormLabel>
                                    <FormLabel fontSize="14px" htmlFor="name" color="#647196">Change feature state</FormLabel>
                                    <Select width="458px" backgroundColor="#F7F8FD">
                                        <option>Planned</option>
                                        <option>UI</option>
                                        <option>UX</option>
                                    </Select>
                                </FormControl>
                                <Field name="name" validate={validateInputs}>
                                    {({ field, form }) => (
                                        <FormControl className="form-control" isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="name">Feedback Detail</FormLabel>
                                            <FormLabel fontSize="14px" htmlFor="name" color="#647196">Include any specific comments on what should be improved, added, etc.</FormLabel>
                                            <Textarea width="458px" {...field} id="name" className="input-form" width="458px" {...field} variant="filled" backgroundColor="#F7F8FD" id="name" />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <div className="button-group">
                                    <div className="button-left">
                                        <Link to="/feedback-detail">
                                            <button className="button-cancel">Delete</button>
                                        </Link>
                                    </div>
                                    <div className="button-right">
                                        <Link to="/feedback-detail">
                                            <button
                                                className="button-gray"
                                                isLoading={props.isSubmitting}
                                            >
                                                Cancel
                                            </button>
                                        </Link>
                                        <Link to="/feedback-detail">
                                            <button
                                                className="button-purplelarge"
                                                isLoading={props.isSubmitting}
                                            >
                                                Add Feedback
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>

    )
}

export default EditFeedBack