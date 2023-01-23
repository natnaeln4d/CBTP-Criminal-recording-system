import React from 'react'
import Sidebar from '../../SIdebar/Sidebar'
import Profile from '../Profile/Profile'
import './sectionContainer.css'

function SectionContainer() {
  return (
    <div className='sectionContainer'>
        <div className="section">
            <Sidebar />
          <div className='contents-x'>
            <Profile />
          </div>
        </div>

    </div>
  )
}

export default SectionContainer