import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import './home.css'
import Mail from './Mail'

import Properties from '../components/Properties'
import WorldProperties from '../components/WorldProperties'
import GusetsLoveIt from '../components/GusetsLoveIt'
function Home() {


    return (
        <div className='home'>
            <Nav />
            <Header />
            <div className="homeContainer">
                <WorldProperties />
                <Properties />

                <GusetsLoveIt />
            </div>
            <Mail />
            <Footer />
        </div>
    )
}

export default Home