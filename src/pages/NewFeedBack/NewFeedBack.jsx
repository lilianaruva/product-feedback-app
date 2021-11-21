import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { FormControl, FormLabel, FormErrorMessage, Input, Select, Textarea,FormHelperText } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import './newFeedback.css';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {rdxfeedbackactions } from '../../redux/reducers/feedback';
import { v4 as uuidv4 } from "uuid";
const NewFeedBack = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [form,setFormValues ] = useState({
        id:uuidv4(),
        title: "",
        category: "Feature",
        detail:"",
        vote:"0",
        status: "Planned",
        comment:[],
    });
    const  fromNotifications = location.state;
    const icon = () => (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1342)" />
            <path d="M30.3425 36V30.1657H36.0295V25.8637H30.3425V20H25.7459V25.8637H20V30.1657H25.7459V36H30.3425Z" fill="white" />
            <defs>
                <radialGradient id="paint0_radial_0_1342" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
                    <stop stop-color="#E84D70" />
                    <stop offset="0.530886" stop-color="#A337F6" />
                    <stop offset="1" stop-color="#28A7ED" />
                </radialGradient>
            </defs>
        </svg>

    )
    const handleChangeTitle =  (e) =>{
        setFormValues({...form,title:e.target.value});
        
    }

    const handleChangeDetail =  (e) =>{
        setFormValues({...form,detail:e.target.value});
      
    }

    const handleChangeCategory =  (e) =>{
        setFormValues({...form,category:e.target.value});
        
    }

    const handleSubmitStore = () =>{

        dispatch(rdxfeedbackactions.addFeedback({feedback:form}));
     

    }
    function validateInputs(value) {
        let error
        if (!value) {
            error = "Can't be empty"
        }
        return error
    }

    return (
        <>

            <div className="newFeedback">
                {
                   

                }
                <div className="goBack">
                    <ChevronLeftIcon color="#4661E6" />
                    <Link to="/">
                        <a>Go Back</a>
                    </Link>
                </div>
                <div className="circle-icon">
                    {icon()}
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
                                <FormControl id="email">    
                                <FormLabel fontWeight="bold" margin="0" fontSize="14px" htmlFor="name">Feedback Title</FormLabel>
                                            <FormLabel fontSize="14px" htmlFor="name" color="#647196">Add a short, descriptive headline</FormLabel>
                                          
                                <Input onChange={handleChangeTitle} className="input-form" width="458px"  variant="filled" backgroundColor="#F7F8FD" id="name" />
                                 <FormHelperText>We'll never share your email.</FormHelperText>
                                </FormControl>
                                <FormControl id="country">
                                    <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="name">Category</FormLabel>
                                    <FormLabel fontSize="14px" htmlFor="name" color="#647196">Choose a category for your feedback</FormLabel>
                                    <Select onChange={handleChangeCategory} width="458px" backgroundColor="#F7F8FD">
                                        <option>Feature</option>
                                        <option>UI</option>
                                        <option>UX</option>
                                        <option>Enhancement</option>
                                        <option>Bug</option>
                                    </Select>
                                </FormControl>
                                        <FormControl className="form-control" >
                                            <FormLabel fontSize="14px" margin="0" fontWeight="bold" htmlFor="name">Feedback Detail</FormLabel>
                                            <FormLabel fontSize="14px" htmlFor="name" color="#647196">Include any specific comments on what should be improved, added, etc.</FormLabel>
                                            <Textarea onChange={handleChangeDetail} width="458px"  id="name" className="input-form" width="458px"  variant="filled" backgroundColor="#F7F8FD" id="name" />
                                           
                                        </FormControl>
                               
                                <div className="button-group">
                                    <Link to="/">
                                        <button
                                            className="button-gray"
                                            isLoading={props.isSubmitting}
                                        >
                                            Cancel
                                        </button>
                                    </Link>
                                    <Link to="/">
                                        <button
                                            className="button-purplelarge"
                                            isLoading={props.isSubmitting}
                                            onClick={handleSubmitStore}
                                        >
                                            Add Feedback
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

export default NewFeedBack;