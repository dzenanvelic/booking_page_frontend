import React from 'react'
import './nav.css'
function Nav() {
    return (
        <div className='navigation'>
            <div className="nav-container">
                <span className='logo'>LastMinuteBooking</span>
                <div className="login-register">
                    <button>Register</button>
                    <button>Login</button>

                </div>
            </div>
        </div>
    )
}

export default Nav