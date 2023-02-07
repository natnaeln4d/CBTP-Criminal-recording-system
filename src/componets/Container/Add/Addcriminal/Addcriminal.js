import "./Addcriminal.css"
import React,{useState} from "react";


function Addcriminal() {
    const [isEdit, setIsEdit] = useState(false);
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

    <div className="container-xP-edit">
    <div className='container__profile_addCr'>
     <h1>Add criminal page </h1>
     <form className="edit_inputForms">
       
       
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

         <div className="edit_inputs ">
         <button name='' className='sign-btn add__criminal'>{isEdit ? "Edit" : "Add"} Criminal</button>
         </div>

      </form>
      
   </div>
</div>
  )
}


export default Addcriminal
