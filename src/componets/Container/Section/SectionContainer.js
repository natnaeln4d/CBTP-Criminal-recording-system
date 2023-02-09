import React from 'react'
import Sidebar from '../../SIdebar/Sidebar'
import AddAdmin from '../Add/Addadmin/AddAdmin'
import Addcriminal from '../Add/Addcriminal/Addcriminal'
import EditProfile from '../Profile/EditProfile'
import Profile from '../Profile/Profile'
<<<<<<< HEAD
import SearchBar from '../searchBar/SearchBar'
=======
import Viewall from '../Viewall/Viewall'
>>>>>>> f9db007ed24c5c573738a0bba3e183f1d08bde92
import './sectionContainer.css'

function SectionContainer() {
  return (
    <div className='sectionContainer'>
        <div className="section">
            <Sidebar />
          <div className='contents-x'>
            {/* <Profile /> */}
            {/* <EditProfile /> */}
            {/* <Addcriminal /> */}
<<<<<<< HEAD
            <SearchBar />
=======
            {/* <Viewall /> */}
            {/* <AddAdmin /> */}
>>>>>>> f9db007ed24c5c573738a0bba3e183f1d08bde92
          </div>
        </div>

    </div>
  )
}

export default SectionContainer