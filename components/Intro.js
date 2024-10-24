import React from 'react'
import profile from '../assets/profile.png'
const Intro = () => {
  return (
    



<div className="container" id='about'>
<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0 welcome">
    <div className="card">
      <div className="card-body welcome">
        <h2 className="card-title">Welcome</h2>
        <p className="card-text">Hi, I’m Adarsh Singh, a final-year B.Tech student specializing in <b>Information Technology</b> at 
         <b> Madan Mohan Malviya University of Technology</b>. My passion lies in building efficient, scalable applications 
          and solving complex technical problems. Over the years, I have developed a strong foundation in data structures and algorithms,
           as well as practical experience in web development, particularly using the <b>MERN</b> stack (MongoDB, Express.js, React, Node.js).</p>
         <div className='container'>
             <div className='row'>
                <div className='icon'> <a><i class="fa-brands fa-linkedin"></i></a></div>
                <div className='icon '> <a><i class="fa-brands fa-facebook"></i></a></div>
                <div className='icon'> <a><i class="fa-brands fa-twitter"></i></a></div>
                <div className='icon '> <a><i class="fa-brands fa-github"></i></a></div>
                <div className='icon'> <a><i class="fa-solid fa-at"></i></a></div>
                <div className='icon'> <a><i class="fa-brands fa-instagram"></i></a></div>
             </div>
            
         </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body profile-img ">
        <img src={profile}  className=' text-center row justify-content-center img-fluid' ></img>
      </div>
    </div>
  </div>
  </div>
   </div>
  )
}

export default Intro;