import React from 'react'
import './hotels.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Lists from '../components/Lists'
import { useLocation } from 'react-router-dom'
function Hotels() {
    const location = useLocation()
    console.log("location", location)
    return (
        <div className='hotels'>
            <Nav />
            <Header type="lists" />

            <Lists />
        </div>
    )
}

export default Hotels