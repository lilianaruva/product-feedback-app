import React from "react";
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, FormErrorMessage, Input, Select, Button } from "@chakra-ui/react";
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
            <div classname="newFeedback">
                <div classname="feedback-form">
                    <p>ho</p>
                    
                </div>

            </div>
        </>
    )
}

export default NewFeedBack;