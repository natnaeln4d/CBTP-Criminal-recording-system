import React from 'react'
import './Footer.css'

function Footer() {
    let year = new Date()
    console.log();
  return (
    <div className='footer bg-gray-800'>&copy; {year.getFullYear()}  Powered by DevX </div>
  )
}

export default Footer