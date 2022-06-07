import React from 'react'
import './mail.css'
function Mail() {
    return (
        <div className='mail-section'>

            <h1>Save time save money!</h1>
            <h5>Sign up and we`ll send you best deals to you</h5>
            <div className="input-wrapper">
                <input type="text" placeholder='Your Email' />
                <button className="mail-button">Subscribe</button>
            </div>

        </div>
    )
}

export default Mail