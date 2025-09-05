import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   
   
    

     <div className='errorsection'>
        <h1>404</h1>
         <div>Page Not Found</div>
         <Link to="/">
    <p>Click Here to Go Offical WebSite</p>
    
    </Link>
    </div>
   
   
  )
}

export default NotFound