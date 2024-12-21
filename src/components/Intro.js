import React from 'react'
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png'
import { Fb_URL,Insta_URL,GitHub_URL,gmail,whatsapp,twitter_URL,LinkedIn_URL } from '../utils/data';

const Intro = () => {
  return (         

<div className="flex  justify-between m-5 bg-gray-200">

      <div className="m-5 p-4 bg-orange-50 w-1/2">     
        <h2 className="font-bold text-4xl">Welcome</h2>
         <p className="my-4">
              Hi, I’m Adarsh Singh, a final-year B.Tech student specializing in <b>Information Technology</b> at 
              <b> Madan Mohan Malviya University of Technology</b>. My passion lies in building efficient, scalable applications 
              and solving complex technical problems. Over the years, I have developed a strong foundation in data structures and algorithms,
              as well as practical experience in web development, particularly using the <b>MERN</b> stack (MongoDB, Express.js, React, Node.js).
         </p>
         <div className='container'>
             <div className='flex'>
                <div className='mr-2'> <a href={LinkedIn_URL}><i className="fa-brands fa-linkedin"></i></a></div>
                <div className='mr-2 '> <a href={Fb_URL}><i className="fa-brands fa-facebook"></i></a></div>
                <div className='mr-2'> <a href={twitter_URL}><i className="fa-brands fa-twitter"></i></a></div>
                <div className='mr-2 '> <a href={GitHub_URL}><i className="fa-brands fa-github"></i></a></div>
                <div className='mr-2'> <a href={gmail}><i className="fa-solid fa-at"></i></a></div>
                <div className='mr-2'> <a href={Insta_URL}><i className="fa-brands fa-instagram"></i></a></div>
                <div className='mr-2'> <a href={whatsapp}><i className="fa-brands fa-whatsapp"></i></a></div>
             </div>     
         </div>   
      </div>

      <div className=" flex justify-center items-center  p-4 w-1/2 h-3/4 ">
        <img src={profile}  className='h-3/4 ' ></img>
      </div>
    
  
  </div>
   
  )
}

export default Intro;