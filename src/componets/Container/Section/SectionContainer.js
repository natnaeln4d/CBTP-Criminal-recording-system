import React from 'react'
import Sidebar from '../../SIdebar/Sidebar'
import Addcriminal from '../Add/Addcriminal/Addcriminal'
import EditProfile from '../Profile/EditProfile'
import Profile from '../Profile/Profile'
import './sectionContainer.css'

function SectionContainer() {
  return (
    <div className='sectionContainer'>
        <div className="section">
            <Sidebar />
          <div className='contents-x'>
            {/* <Profile /> */}
            {/* <EditProfile /> */}
            <Addcriminal />
          </div>
        </div>

    </div>
  )
}

export default SectionContainer