import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 right-0 left-0">
    <div className="flex bg-green-100 justify-between items-center">
       <a className="" href="/">
        <img src={logo} className='h-12 m-4'></img>
       </a>
      <div className="" id="navbarNav">
        <ul className="flex m-4 p-4">
          <li className="mx-4">
            <Link to='/'>Home</Link>
          </li>
          <li className="mx-4">
             <Link to='/About'> About</Link>
          </li>
          <li className="mx-4">
              <Link to='/projectpage'> Project</Link>
          </li>
          <li className="mx-4">
              <Link to='/contact'> Contact</Link>
          </li>
          <li className="mx-4">
              <Link to='/codingprofile'> Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;