import React from 'react'
import SearchBar from './Container/searchBar/SearchBar'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

export default function TheApp() {
  return (
    
          <div className="w-[100%]">
      <Navbar />
      {/* <SectionContainer /> */}
      {/* <Viewall /> */}
    <SearchBar />
      {/* <Sidebar /> */}

      <Footer />
       {/* <Login />  */}
      
   
    </div>
      

  )
}
