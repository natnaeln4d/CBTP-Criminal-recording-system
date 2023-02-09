// import React,{useState} from 'react'
// // import './profile.css'

// import './editprofile.css'
// // import './profile.css'


// function EditProfile() {
//   const [editForm, setEditForm] = useState({
//     firstName: "Robera",
//     lastName: "Insarmu",
//     phone : 23272373232,
//     email: 'roba@gmail.com'
//   })

//   const handleForm = (e) =>{
//     const {name,values} = e.target;
//     setEditForm(prev=>({
//         ...prev,
//         [name] : values
//     }))
//  }

//   return (
//     // <div className='editContainer'>

//     //     <div className="admin_photo">
//     //         <img src={adminPhoto} alt="" />
//     //     </div>

//     //    <div className="inputForms">
//     //    <div className="inputs">
//     //         <label htmlFor="name">
//     //             Fristname
//     //         </label>
//     //         <input type="text" name='name' value=''  />
//     //     </div>
//     //    </div>
//     // </div>

//     <div className="container-xP-edit">
//         <div className='container__profile'>
//             <div className="edit_inputForms">
            
//                 <div className="edit_inputs ">
//                     <label htmlFor="name">
//                         Firstname
//                     </label>
//                     <input type="text" name='firstName' value={editForm.firstName} onChange = {handleForm}  />
//                 </div>

//                 <div className="edit_inputs ">
//                     <label htmlFor="name">
//                         Lastname
//                     </label>
//                     <input type="text" name='lastName'value={editForm.lastName} onChange = {handleForm} />
//                 </div>
//                 <div className="edit_inputs ">
//                     <label htmlFor="name">
//                         Email
//                     </label>
//                     <input type="text" name='email'value={editForm.email} onChange = {handleForm} />
//                 </div>

//                 <div className="edit_inputs ">
//                     <label htmlFor="name">
//                         Phone
//                     </label>
//                     <input type="text" name='phone'value={editForm.phone} onChange = {handleForm} />
//                 </div>

//             </div>
        
//         </div>
//     </div>
//   )
// }

// export default EditProfile

// import "./Addcriminal.css"
import React,{useState} from "react";


function EditProfile() {
    const [isEdit, setIsEdit] = useState(true);
  const [editForm, setEditForm] = useState({
    firstName: "Robera",
    lastName: "Insarmu",
    age : 12,
    crimeType: "murdering",
    crimeDescription: "lorem shshs sh",
    dateofSentence: "",
    yearOfSentence: 4,

  })

  const handleForm = (e) =>{
    const {name,values} = e.target;
    setEditForm(prev=>({
        ...prev,
        [name] : values
    }))
 }

  return (

    <div className="container-xP-edit-a">
    <div className='container__profile_addCr'>
     <form className="edit_inputForms">
     <h1 className="section__page_title">Edit criminal page </h1>
       
       
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
                 Age
             </label>
             <input type="number" name='age'value={editForm.age} onChange = {handleForm} />
         </div>

         <div className="edit_inputs ">
             <label htmlFor="name">
                 Crime Type
             </label>
             <input type="text" name='crimeType'value={editForm.crimeType} onChange = {handleForm} />
         </div>

         <div className="edit_inputs ">
             <label htmlFor="name">
                 Date of sentence
             </label>
             <input type="date" name='dateofSentence'value={editForm.dateofSentence} onChange = {handleForm} />
         </div>

         <div className="edit_inputs ">
             <label htmlFor="name">
                 Year of Sentence
             </label>
             <input type="text" name='yearOfSentence'value={editForm.yearOfSentence} onChange = {handleForm} />
         </div>

         <div className="edit_inputs ">
         <button name='' className='sign-btn add__criminal'>{isEdit ? "Edit" : "Add"} Criminal</button>
         </div>

      </form>
      
   </div>
</div>
  )
}


export default EditProfile
