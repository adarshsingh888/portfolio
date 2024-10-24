import React from 'react'

import React from 'react'

const Exp = () => {
  return (
    
         <div className="card" style={{ width: '18rem' }}>
           
           <div className="card-body col">
             <h5 className="card-title">Card title</h5>
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
    <div  className='container'>
         <div className='heading'>Experience / Work</div>
        <div className='container text-center row justify-content-center'>
        <Exp/>
        <Exp/>
        </div>
         
    </div>
  )
}

export default Work