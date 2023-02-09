
import React,{useState} from "react";
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillWarning} from 'react-icons/ai'

function AddAdmin() {
  const [passType, setPassType] = useState("password")
  const [show, setShow] = useState(<AiFillEyeInvisible />)
  const [error, setError] = useState(false)

    const [isEdit, setIsEdit] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "Robera",
    age: "Insarmu",
    phone : 23272373232,
    address: "Jimma",
    user: 'rinsarmu',
    role: 'admin',
    password: "@32sjd",
    confirmPassword: "@32sjd",
    
  })

  const handleForm = (e) =>{
    e.preventDefault();
    const {name,values} = e.target;
    setEditForm(prev=>({
        ...prev,
        [name] : values
    }))
 }

     //show or hide password
     const showPass = (e)=>{
      e.preventDefault();
      if(passType === 'password'){
          setPassType("text")
          setShow(<AiFillEye />)
      }
      else {
        setPassType("password")
        setShow(< AiFillEyeInvisible />)
  } 
          
  }

  return (

    <div className="container-xP-edit-a">
    <div className='container__profile_addCr'>
    
     <form className="edit_inputForms">
     <h1 className="section__page_title">Add Admin page </h1>

       
       
         <div className="edit_inputs ">
             <label htmlFor="name">
                 Name
             </label>
             <input type="text" name='name' value={editForm.name} onChange = {handleForm}  />
         </div>

        
         <div className="edit_inputs ">
             <label htmlFor="name">
                 Age
             </label>
             <input type="number" name='age'value={editForm.age} onChange = {handleForm} />
         </div>

         <div className="edit_inputs ">
             <label htmlFor="name">
                 Phone
             </label>
             <input type="number" name='phone' placeholder="Phone +251" value={editForm.phone} onChange = {handleForm} />
         </div>

         <div className="edit_inputs ">
             <label htmlFor="name">
                 Address
             </label>
             <input type="text" name='address'value={editForm.address} onChange = {handleForm} />
         </div>

         <div className="edit_inputs ">
             <label htmlFor="name">
                 Roles
             </label>
             <select name = 'role' value={editForm.role} onChange = {handleForm}>
              <option>SuperAdmin</option>
              <option>Admin</option>
              <option>Officer</option>

             </select>
            
         </div>

          <div className="edit_inputs pswd__area">
          <label htmlFor="name">
                  Password
             </label>
            <input type={passType} name='password' value={editForm.password} onChange = {handleForm} className='pswd__area'/>

            <button className='show__pswd' onClick={showPass}>  {show } </button>
          </div>

          <div className="edit_inputs pswd__area">
          <label htmlFor="name">
                 Confirm Password
             </label>
            <input type={passType} name='confirmPassword' value={editForm.confirmPassword} onChange = {handleForm} className='pswd__area'/>

            {/* <button className='show__pswd' onClick={showPass}>  {show } </button> */}
          </div>


         <div className="edit_inputs ">
         <button name='' className='sign-btn add__criminal'>{isEdit ? "Edit" : "Add"} Admin</button>
         </div>

      </form>
      
   </div>
</div>
  )
}


export default AddAdmin
