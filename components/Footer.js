import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='container-fluid nav justify-content-center '>
        <div className='row footer-icon'>
                <div className='icon'> <a><i class="fa-brands fa-linkedin"></i></a></div>
                <div className='icon '> <a><i class="fa-brands fa-facebook"></i></a></div>
                <div className='icon'> <a><i class="fa-brands fa-twitter"></i></a></div>
                <div className='icon '> <a><i class="fa-brands fa-github"></i></a></div>
                <div className='icon'> <a><i class="fa-brands fa-instagram"></i></a></div>
             </div>
        </div>
             <div className=' contact'>
                <div className='info'><i class="fa-solid fa-phone "></i><b> : </b>+91 6394432767</div>
                <div className='info'><i class="fa-solid fa-envelope "></i><b> : </b>adarsh@273013gmail.com</div>
             </div>
             <div className="copyright text-center">
                <span className='col'>Copyright <i class="fa-regular fa-copyright"> </i>2024 </span>
                <span className='col'> Designed by: <b>Adarsh Singh</b></span>
            </div>
    </div>
  )
}

export default Footer