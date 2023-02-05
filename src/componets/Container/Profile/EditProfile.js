import React,{useState} from 'react'
// import './profile.css'

import AdminPhoto from './AdminPhoto'
import {MdMail} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
import {FaLocationArrow} from 'react-icons/fa'

import './editprofile.css'
// import './profile.css'


function EditProfile() {
  const [editForm, setEditForm] = useState({
    firstName: "Robera",
    lastName: "Insarmu",
    phone : 23272373232,
    email: 'roba@gmail.com'
  })

  const handleForm = (e) =>{
    const {name,values} = e.target;
    setEditForm(prev=>({
        ...prev,
        [name] : values
    }))
 }

  return (
    // <div className='editContainer'>

    //     <div className="admin_photo">
    //         <img src={adminPhoto} alt="" />
    //     </div>

    //    <div className="inputForms">
    //    <div className="inputs">
    //         <label htmlFor="name">
    //             Fristname
    //         </label>
    //         <input type="text" name='name' value=''  />
    //     </div>
    //    </div>
    // </div>

    <div className="container-xP-edit">
    <div className='container__profile'>
     <AdminPhoto />
     <div className="edit_inputForms">
       
       
         <div className="edit_inputs ">
             <label htmlFor="name">
                 Firstname
             </label>
             <input type="text" name='firstName' value={editForm.firstName} onChange = {handleForm}  />
         </div>

         <div className="edit_inputs ">
             <label htmlFor="name">
                 Lastname
             </label>
             <input type="text" name='lastName'value={editForm.lastName} onChange = {handleForm} />
         </div>
         <div className="edit_inputs ">
             <label htmlFor="name">
                 Email
             </label>
             <input type="text" name='email'value={editForm.email} onChange = {handleForm} />
         </div>

         <div className="edit_inputs ">
             <label htmlFor="name">
                 Phone
             </label>
             <input type="text" name='phone'value={editForm.phone} onChange = {handleForm} />
         </div>

      </div>
      
   </div>
</div>
  )
}

export default EditProfile