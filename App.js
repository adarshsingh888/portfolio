import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import Navbar from './src/components/Navbar.js';
import Body from './src/components/Body.js';
import Footer from './src/components/Footer.js';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import About from './src/components/About.js';
import Contact from './src/components/Contact.js';
import Error from './src/components/Error.js';
import CodingProfile from './src/components/CodingProfile.js';
import ProjectPage from './src/components/ProjectPage.js';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  );
}
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Body />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/contact',
      element:<Contact />
    },
    {
      path:'/codingprofile',
      element:<CodingProfile/>
    },
    {
      path:'/projectpage',
      element:<ProjectPage/>
    }
  ],
  errorElement:<Error/>
}])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
