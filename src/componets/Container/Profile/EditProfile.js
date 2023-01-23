import React from 'react'
import AdminPhoto from './AdminPhoto'
import './editprofile.css'
import './profile.css'


function EditProfile() {
  return (
    <div className='editContainer'>

        <AdminPhoto />

       <div className="inputForms">
       <div className="inputs">
            <label htmlFor="name">
                Full name
            </label>
            <input type="text" name='name' />
        </div>
       </div>
    </div>
  )
}

export default EditProfile