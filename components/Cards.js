import React from 'react'

const Cards = ({imageSrc,title}) => {
  return (
   
         <div className="card" style={{ width: '10rem' }}>
             <img src={imageSrc} className="card-img-top rounded float-start" alt='fdd' />
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
             </div>
           </div>

  
  )
}

export default Cards;