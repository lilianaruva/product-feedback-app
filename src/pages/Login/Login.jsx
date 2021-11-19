import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, FormErrorMessage, Input, Select, Textarea, Button } from "@chakra-ui/react";
import './login.css';

const Login = () => {

    function validateInputs(value) {
        let error
        if (!value) {
            error = "Can't be empty"
        } else if (value.toLowerCase() !== "a") {
            error = "Error"
        }
        return error
    }

    return (
        <>
            <div className="login">
                <div className="login-container">
                    <h1 className="login-title">Welcome back!</h1>
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
                                <Field name="username" validate={validateInputs}>
                                    {({ field, form }) => (
                                        <FormControl className="form-control" isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel fontWeight="bold" marginBottom="0.5rem" fontSize="14px" htmlFor="name">Username</FormLabel>
                                            <Input className="input-form" width="458px" {...field} variant="filled" backgroundColor="#F7F8FD" id="name" />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="password" validate={validateInputs}>
                                    {({ field, form }) => (
                                        <FormControl className="form-control" isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel fontWeight="bold" marginBottom="0.5rem" fontSize="14px" htmlFor="name">Password</FormLabel>
                                            <Input className="input-form" width="458px" {...field} variant="filled" backgroundColor="#F7F8FD" id="name" />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>


                                <div className="button-group">
                                    <Link to="/">
                                        <button
                                            className="button-purplelarge"
                                            isLoading={props.isSubmitting}
                                        >
                                            Login
                                        </button>
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Login;