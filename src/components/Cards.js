import React from 'react'

const Cards = ({imageSrc,title}) => {
  return (
   
         <div className="flex flex-col m-2 p-2 justify-center items-center" style={{ width: '10rem' }}>
             <img src={imageSrc} className="m-2" alt='fdd' />
             <div className="m-2 font-bold">
                 <h5 className="card-title">{title}</h5>
             </div>
           </div>

  
  )
}

export default Cards;