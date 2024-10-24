import React from 'react';
import Cards from './Cards';
import GFG from '../assets/Profiles/gfg.png';
import HackerRank from '../assets/Profiles/HackerRank.png'
import LeetCode from '../assets/Profiles/Leetcode.png'

const Profile = () => {
  return (
    <div className='container-fluid text-center'>
          <div className='heading'>
            Profiles
          </div>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center container-fluid">
          <a href='https://www.geeksforgeeks.org/user/adarshsingh1234/' className=' text-center row justify-content-center'> <Cards imageSrc={GFG} title="Geeks for Geeks" /></a>
          <a href='https://www.hackerrank.com/profile/adarsh273013' className=' text-center row justify-content-center'><Cards imageSrc={HackerRank} title="HackerRank"/></a>
          <a href='https://leetcode.com/u/adarsh639443/' className=' text-center row justify-content-center'><Cards imageSrc={LeetCode} title="LeetCode"/></a>
         </div>
        



    </div>
  )
}

export default Profile;