import React from "react";
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, FormErrorMessage, Input, Select, Textarea, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import './styles/newFeedback.css';

const NewFeedBack = () => {

    function validateInputs(value) {
        let error
        if (!value) {
            error = "Name is required"
        } else if (value.toLowerCase() !== "naruto") {
            error = "Jeez! You're not a fan 😱"
        }
        return error
    }

    return (
        <>
            <div className="newFeedback">
                <div className="goBack">
                    <ChevronLeftIcon color="#4661E6" />
                    <a>Go Back</a>
                </div>
                <div className="feedback-form">
                    <h1>Create New Feedback</h1>
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
                                    <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="name">Feedback Detail</FormLabel>
                                    <FormLabel fontSize="14px" htmlFor="name" color="#647196">Choose a category for your feedback</FormLabel>
                                    <Select width="458px" backgroundColor="#F7F8FD">
                                        <option>Feature</option>
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
                                    <button
                                        className="button-gray"
                                        isLoading={props.isSubmitting}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className="button-purplelarge"
                                        isLoading={props.isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
        </>
    )
}

export default NewFeedBack;