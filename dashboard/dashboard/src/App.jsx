import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import {Routes, Route} from 'react-router-dom'
import "./App.css"
import NotFound from './vendorDashboard/components/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/*" element={<NotFound />} />
      </Routes>
       
        {/* Add more routes as needed */}
        {/* <Route path="/another-page" element={<AnotherPage />} /> */}
       
    </div>
  )
}

export default App