import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sideBar__container bg-gray-800'>
        <div className="sideBar__contents">
        <div className="container__content">
            <a href="#" className='side__elements'>
                <FaUserCircle />
                Profile
            </a>
        </div>

        <div className="container__content">
            <a href="#" className='side__elements'>
                <FaUserCircle />
                Profile
            </a>
        </div>

        <div className="container__content">
            <a href="#" className='side__elements'>
                <FaUserCircle />
                View
            </a>
        </div>

        <div className="container__content">
            <a href="#" className='side__elements'>
                <FaUserCircle />
                Profile
            </a>
        </div>

        <div className="container__content">
            <a href="#" className='side__elements'>
                <FaUserCircle />
                Add Criminal
            </a>
        </div>
        </div>
    </div>
  )
}

export default Sidebar