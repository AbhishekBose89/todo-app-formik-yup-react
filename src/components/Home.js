import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Home.css'


export default function Home () {
    let nav=useNavigate()

    function handleClick (){
         nav("/login",true)
    };
    let clickHandler=()=>{
        nav("/signup",true)
    }
    return(
        <div className='home-items'>
        <h3 className='home-title'>Welcome to Todo Application</h3>
        <div className='buttons'>
            <button id='login-btn' onClick={handleClick}>Log In</button>
            <button id='signup-btn' onClick={clickHandler}>Sign Up </button>
        </div>
        </div>
    );
};