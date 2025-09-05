import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section className="topBarSection">
        <div className="CompanyTitle">
            <Link to='/' className='link'>
                <h2>SESU</h2>
            </Link>
           
        </div>
        <div className="searchBar">
            <input type="text" placeholder="Search..." />
        </div>
        <div className="userProfile">
            Login / SignUp
        </div>
        </section>


  )
}

export default TopBar