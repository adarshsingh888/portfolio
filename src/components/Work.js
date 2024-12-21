import React from 'react'

import React from 'react'

const Exp = () => {
  return (
    
         <div className="flex flex-wrap m-5 p-4 justify-start bg-green-100">
           
           <div className="bg-yellow-500 flex-col m-4 p-4 justify-center items-center rounded-md">
             <h5 className="font-bold text-lg">Card title</h5>
             <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
             <p className="card-text">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
             </p>
             <a href="#" className="card-link">Card link</a>
             <a href="#" className="card-link">Another link</a>
           </div>
         </div>
    
  )
}


const Work = () => {
  return (
    <div  className='m-5 p-4 bg-orange-50'>
         <div className=' font-bold  p-4 text-2xl bg-amber-200 '>Experience / Work</div>
        
        <Exp/>
        <Exp/>
        
         
    </div>
  )
}

export default Work