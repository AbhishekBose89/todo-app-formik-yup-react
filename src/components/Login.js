import React, { useState } from 'react';

import "./Login.css";

import LoginDetails from '../Json/LoginDetails.json'
import { useLocation, useNavigate } from 'react-router-dom';


let Login = () => {
    let location=useLocation();
    console.log(location.pathname)

    let navigator=useNavigate()



    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const { email, password } = formData;
    let changeHandler = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    }

    let submitHandler = (event) => {
        event.preventDefault();

        if(LoginDetails.email === email && LoginDetails.password === password){
        
            navigator("/todolist",true)
        }else{
            navigator("/invalidaccess",true)
        }


    }
    return (
        <div className='login-form'>
            <h3>Todo Login</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='email'>Email :</label>
                    <input type="email" id="email" name="email" onChange={changeHandler} value={email} placeholder='Enter your email id' />
                </div>
                <div>
                    <label htmlFor='password'>Password :</label>
                    <input type="password" id='password' name='password' onChange={changeHandler} value={password} placeholder='Enter your password'
                    />
                </div>
                <div>
                    <button type='submit' id='submit-btn'>Login</button>
                </div>
            </form>
        </div >

    );
};

export default Login;