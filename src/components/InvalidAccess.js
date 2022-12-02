import React from 'react'
import { useNavigate } from 'react-router-dom'
import './InvalidAccess.css'

export default function InvalidAccess() {
    let navigator = useNavigate()
    let clickHandler = () => {
        navigator("/login", true)
    }

    return (
        <div className='invalidaccess-item'>
            <p className='invalidaccess-para'>You entered wrong credencial. Please Check again</p>
            <div>
                <button onClick={clickHandler} id='invalidaccess-btn' >Log Back in</button>
            </div>
        </div>
    )
}