// export default EditProfile

// import "./Addcriminal.css"
import React, { useState } from "react";

function EditProfile() {
  const [isEdit, setIsEdit] = useState(true);
  const [editForm, setEditForm] = useState({
    firstName: "Robera",
    lastName: "Insarmu",
    age: 12,
    crimeType: "murdering",
    crimeDescription: "lorem shshs sh",
    dateofSentence: "",
    yearOfSentence: 4,
  });
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [crimeType, setcrimeType] = useState("");
  const [crimeDescription, setcrimeDescription] = useState("");
  const [dateofSentence, setdateofSentence] = useState("");
  const [yearOfSentence, setyearOfSentence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-xP-edit-a">
      <div className="container__profile_addCr">
        <form className="edit_inputForms">
          <h1 className="section__page_title">Edit Admin page </h1>

          <div className="edit_inputs ">
            <label htmlFor="name">Firstname</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>

          <div className="edit_inputs ">
            <label htmlFor="name">Lastname</label>
            <input
              type="text"
              name="lastName"
              value={editForm.lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="edit_inputs ">
            <label htmlFor="name">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
          </div>

          <div className="edit_inputs ">
            <label htmlFor="name">Crime Type</label>
            <input
              type="text"
              name="crimeType"
              value={crimeType}
              onChange={(e) => setcrimeType(e.target.value)}
            />
          </div>

          <div className="edit_inputs ">
            <label htmlFor="name">Date of sentence</label>
            <input
              type="date"
              name="dateofSentence"
              value={dateofSentence}
              onChange={(e) => setdateofSentence(e.target.value)}
            />
          </div>

          <div className="edit_inputs ">
            <label htmlFor="name">Year of Sentence</label>
            <input
              type="text"
              name="yearOfSentence"
              value={yearOfSentence}
              onChange={(e) => setyearOfSentence(e.target.value)}
            />
          </div>

          <div className="edit_inputs ">
            <button
              name=""
              className="sign-btn add__criminal"
              onClick={handleSubmit}
            >
              {isEdit ? "Edit" : "Add"} Criminal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
