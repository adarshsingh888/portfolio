import React, { useEffect, useState } from 'react'
import { GFG_URL } from '../utils/data';
function CodingProfile() {
  const [gfgData,setgfgData]=useState(null);
  useEffect(()=>{
     fetchData();
  },[]);
  const fetchData=async()=>{
     const response=await fetch(GFG_URL);
     const json = await response.json();
     console.log(json);
     setgfgData(json?.pageProps);
  }
  console.log(gfgData);
  const userData=gfgData?.userInfo;
  const  contestData=gfgData?.contestData;
  console.log(userData);
  console.log(contestData);
  if(gfgData===null){
    return <h1 className='font-bold text-4xl items-center justify-center'>No Data Found</h1>
  }
  return (
    <div>
      <div className='bg-orange-100 m-4 p-4 '>
           <p className='font-bold text-2xl m-4'>GFG Profile Data</p>
           <div className='m-4 p-4 bg-pink-200'>
              <p className='font-bold text-lg'>{userData?.name}</p>
              <p> Institute Rank : {userData?.institute_rank}</p>
              <p>Coding Score: {userData?.score}</p>
              <p>Total Promlem solved: {userData?.total_problem_solved}</p>

           </div>

           <div className='m-4 p-4 bg-pink-200'>
              <p className='font-bold text-lg'>Contest Info</p>
              <p>Global rank {contestData?.user_global_rank} out of {contestData?.total_users}</p>
              <p> No of Star : {contestData?.user_stars} </p>
              <p> Rating : {contestData?.user_contest_data?.current_rating}</p>

           </div>


      </div>

      

    </div>
  )
}

export default CodingProfile;