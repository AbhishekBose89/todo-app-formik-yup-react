import React, { useState } from 'react'
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'
import "./SignUp.css"


export default function SignUp() {

    let navigator = useNavigate()

    const submitSchema = Yup.object().shape(
        {
            firstName: Yup.string("** Enter a valid name")
                .min(3, "** Firstname must be 3 character")
                .required("** Firstname cann't be empty")
                .max(20, "** Firstname not more than 20 character"),
            lastName: Yup.string("** Enter a valid lastname")
                .min(3, "** Lastname must be 3 character")
                .max(20, "** Lastname not more than 20 character")
                .required("** Last name cann't be empty"),
            userEmail: Yup.string("** Email must be a string")
                .email("** Enter a valid format")
                .required("** Email cannot be empty"),
            userPassword: Yup.string("** Please enter valid password")
                .min(6, "** Password length must be 6 character")
                .max(12, "** password length cannot be more than 12 charcter")
                .required("** Password cannot be empty"),
            userConfirmPassword: Yup.string("** Please enter valid password")
                .min(6, "** Password length must be 6 character")
                .max(12, "** password length cannot be more than 12 charcter")
                .required("** Password cannot be empty")
                // .test('password match', "** Both password and confirm password should match", function (value) {
                //     return this.userPassword === value
                // })
                .oneOf([Yup.ref("userPassword"), null], "both password and confirm password should match")
        })

    const [initialFormValue, setInitialFormValue] = useState({
        firstName: "",
        lastName: "",
        userEmail: "",
        userPassword: "",
        userConfirmPassword: ""
    })
    const handleSubmit = (values) => {
        //  console.log(values)
        setInitialFormValue(values)
        console.log(initialFormValue)
    }
    const clickHandler = () => {
        navigator("/todolist", true)
    }

    return (
        <div className='signup'>
            <h2 className='heading'>Sign Up</h2>

            <div>
                <Formik validationSchema={submitSchema} initialValues={initialFormValue} onSubmit={handleSubmit}>
                    {({ errors, touched }) => {
                        return (

                            <Form >
                                <div className='input'>
                                    <label>First Name:</label>
                                    <Field type="text" name="firstName" placeholder='Enter your firstname' />
                                    {errors.firstName && touched.firstName ? (<span className='error'>{errors.firstName}</span>) : null}
                                </div>

                                <div className='input'>
                                    <label>Last Name:</label>
                                    <Field type="text" name="lastName" placeholder='Enter your last name' />
                                    {errors.lastName && touched.lastName ? (<span className='error'>{errors.lastName}</span>) : null}
                                </div>

                                <div className='input'>
                                    <label>Email:</label>
                                    <Field type="email" name="userEmail" placeholder='Enter your email id' />
                                    {errors.userEmail && touched.userEmail ? (<span className='error'>{errors.userEmail}</span>) : null}
                                </div>

                                <div className='input'>
                                    <label>Password:</label>
                                    <Field type="password" name="userPassword" placeholder='Enter your password' />
                                    {errors.userPassword && touched.userPassword ? (<span className='error'>{errors.userPassword}</span>) : null}
                                </div>

                                <div className='input'>
                                    <label>Confirm Password:</label>
                                    <Field type="password" name="userConfirmPassword" placeholder='Enter your password again' />

                                    {errors.userConfirmPassword && touched.userConfirmPassword ? (<span className='error'>{errors.userConfirmPassword}</span>) : null}

                                </div>
                                {/* <button type='submit' id='signup'> Sign Up</button>  */}

                                <button type='submit' onClick={clickHandler} id='signup'> Sign Up</button>
                            </Form>
                        )
                    }
                    }
                </Formik>
            </div>
        </div>
    )
}