import React from 'react'
import Intro from './Intro'
import Skills from './Skills'
import Projects from './Projects'
import Profile from './Profile'
import Work from './Work';
import Footer from './Footer';
import { createBrowserRouter,Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='px-10'>

    <Intro/>
    <Skills/>
    <Projects/>
    <Profile/>
    {/* <Work/> */}
    
    
    </div>
  )
}

export default Body;