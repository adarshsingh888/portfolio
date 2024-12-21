import React from 'react';
import Cards from './Cards';
import GFG from '../../assets/Profiles/gfg.png';
import HackerRank from '../../assets/Profiles/HackerRank.png'
import LeetCode from '../../assets/Profiles/Leetcode.png'

const Profile = () => {
  return (
    <div className='m-5 p-4 bg-orange-50'>
          <div className='font-bold  p-4 text-2xl bg-amber-200'>
            Profiles
          </div>
          <div className="flex flex-wrap m-5 p-4 justify-start bg-green-100">
          <a href='https://www.geeksforgeeks.org/user/adarshsingh1234/' className='  bg-yellow-500 flex m-4 p-4 justify-center items-center rounded-md '> <Cards imageSrc={GFG} title="Geeks for Geeks" /></a>
          <a href='https://www.hackerrank.com/profile/adarsh273013' className='  bg-yellow-500 flex m-4 p-4 justify-center items-center rounded-md '><Cards imageSrc={HackerRank} title="HackerRank"/></a>
          <a href='https://leetcode.com/u/adarsh639443/' className='  bg-yellow-500 flex m-4 p-4 justify-center items-center rounded-md '><Cards imageSrc={LeetCode} title="LeetCode"/></a>
         </div>
        



    </div>
  )
}

export default Profile;