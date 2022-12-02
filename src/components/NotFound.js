import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'


export default function NotFound() {
    let nav=useNavigate()
    function clickHandler (){
        nav('/home',true)
    }
    return (
        <div className='notfound-item'>
        <p className='notfound-para'>Page is not found. Please try again later.</p>
        <button onClick={clickHandler} id='notfound-btn'>Back to home page</button>
        </div>
    )
}