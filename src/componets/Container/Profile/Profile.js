import React from 'react'
import './profile.css'
import AdminPhoto from './AdminPhoto'
import {MdMail} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
import {FaLocationArrow} from 'react-icons/fa'
import Sidebar from '../../SIdebar/Sidebar'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="sectionContainer">
    <div className="section">
      <Sidebar />
      <div className="container-xP-edit-a">
        <div className='profil_cont'>
        <div className='container__profile'>
       <AdminPhoto />
        <h3 className='adminName'>Robera Insarmu</h3>
        <h4 className='adminRole'>Super Admin</h4>

        <div className='basicInfo'>
            <div className="info">
            <FaLocationArrow /> Jimma,Ethiopia
            </div>

            <div className="info">
            <FaPhone /> 098988883
            </div>

            <div className="info">
            <MdMail />hello@gmail.com
            </div>
        </div>

        <div className="horizontalLine"></div>

        <div className="otherInfos">

          <div className='otherInfo'>
            <h4 className='label'>Education</h4>
            <p>Jimma University</p>
          </div>

          <div className='otherInfo'>
            <h4 className='label'>Works at</h4>
            <p>Oromia Police</p>
          </div>
          <Link className='editProfile' to='/editprofile' >
           
            <button>Edit</button>
          </Link>
          
          
        </div>
     </div>
        </div>
     
  </div>
  </div>
  </div>

  
  )
}

export default Profile