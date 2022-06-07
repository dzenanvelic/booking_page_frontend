import React from 'react'
import './hotels.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
function Hotels() {
    return (
        <div className='hotels'>
            <Nav />
            <Header type="lists" />
        </div>
    )
}

export default Hotels