import React from 'react';
import { Fb_URL,Insta_URL,GitHub_URL,gmail,whatsapp,twitter_URL,LinkedIn_URL } from '../utils/data';

const Footer = () => {
  return (
    <div className='bg-gray-500 flex-col items-center p-5 '>
   
        <div className='flex justify-center px-4 mx-4 '>
                <div className='mx-2'> <a href={LinkedIn_URL}><i className="fa-brands fa-linkedin"></i></a></div>
                <div className='mx-2 '> <a href={Fb_URL}><i className="fa-brands fa-facebook"></i></a></div>
                <div className='mx-2'> <a href={twitter_URL}><i className="fa-brands fa-twitter"></i></a></div>
                <div className='mx-2 '> <a href={GitHub_URL}><i className="fa-brands fa-github"></i></a></div>
                <div className='mx-2'> <a href={Insta_URL}><i className="fa-brands fa-instagram"></i></a></div>
             </div>
       
             <div className=' flex justify-center px-4 mx-4 my-4'>
                <div className='mx-2'><i className="fa-solid fa-phone "></i><b> : </b>+91 6394432767</div>
                <div className='mx-2'><i className="fa-solid fa-envelope "></i><b> : </b>adarsh@273013gmail.com</div>
             </div>
             <div className="flex justify-center px-4 mx-4">
                <span className='mx-2'>Copyright <i className="fa-regular fa-copyright"> </i>2024 </span>
                <span className='mx-2'> Designed by: <b>Adarsh Singh</b></span>
            </div>
    </div>
  )
}

export default Footer;