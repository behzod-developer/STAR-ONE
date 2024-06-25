import React from 'react'
import './Home.css'
import Header from '../../component/header/Header'
import OneID from './OneID/OneID'

function Home() {
    return (
        <div className='home'>
            <div className="home-container">
                <Header />
            </div>
            <OneID />
        </div>
    )
}

export default Home