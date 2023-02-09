import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import{FaUserPlus} from 'react-icons/fa'
import {FaListAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sideBar__container bg-gray-800'>
        <div className="sideBar__contents">
        {/* <div className="container__content">
            <Link to="/Profile" >
            <a href="#" className='side__elements'>
                <FaUserCircle className='side__icons' />
                Profile
            </a>
            </Link>
        </div> */}

        <div className="container__content">
            <Link to="/">
            <a href="#" className='side__elements'>
                <FaUserCircle className='side__icons'/>
                Profile
            </a>
            </Link>
        </div>

        <div className="container__content">
        <Link to="/viewall">
            <a href="#" className='side__elements'>
                <FaListAlt className='side__icons'/>
                View
            </a>
            </Link>
        </div>
        <div className="container__content">
        <Link to="/viewAdmin">
            <a href="#" className='side__elements'>
                <FaListAlt className='side__icons'/>
                View Admin
            </a>
            </Link>
        </div>

        <div className="container__content">
            <a href="#" className='side__elements'>
                <FaUserCircle className='side__icons'/>
                Profile
            </a>
        </div>

        <div className="container__content">
        <Link to="/addadmin">
            <a href="#" className='side__elements'>
                <FaUserPlus className='side__icons' />
                Add Criminal
            </a>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Sidebar