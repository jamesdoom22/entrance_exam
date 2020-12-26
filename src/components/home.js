import React from 'react';
import '../scss/Home.scss'
import Header from './header'
import HomeContent from './homeContent'

function Home(){ 
    return(
        <div className='Home'>
            <Header/>
            <div id='home'>
            <HomeContent/>
            </div>
            <div className='bodyContent'id='about'>
            ABOUT US CONTENT
            </div>
            <div className='bodyContent'id='core'>
            CORE FEATURES CONTENT
            </div>
            <div className='bodyContent'id='solution'>
            SOLUTIONS CONTENT
            </div>
            <div className='bodyContent'id='whats'>
            WHAT'S NEW CONTENT
            </div>
            <div className='bodyContent' id='contact'>
            CONTACT US CONTENT
            </div>
        </div>
    )
}

export default Home;