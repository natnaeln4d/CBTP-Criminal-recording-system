// export default EditProfile

// import "./Addcriminal.css"
import axios from "axios";
import React, { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import Sidebar from "../../../SIdebar/Sidebar";

function Addcriminal() {
  const [isEdit, setIsEdit] = useState(false);
  const [editForm, setEditForm] = useState({
    firstName: "Robera",
    lastName: "Insarmu",
    age: 12,
    crimeType: "murdering",
    crimeDescription: "lorem shshs sh",
    dateOfSentence: "",
    yearOfSentence: 4,
  });
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [crimeType, setcrimeType] = useState("");
  const [crimeDescription, setCrimeDescription] = useState("");
  const [dateOfSentence, setdateOfSentence] = useState("");
  const [yearOfSentence, setyearOfSentence] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/addCriminal",
        {
          name: `${firstName} ${lastName}`,
          age,
          crimeType,
          crimeDescription,
          dateOfSentence,
          yearOfSentence,
          user: { role: "superAdmin" },
        }
      );
      const data = response?.data;

      if (data.status == "fail") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        setErrorMsg(data.message);
      }
      if (data.status == "success") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        setErrorMsg(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sectionContainer">
      <div className="section">
        <Sidebar />
        <div className="container-xP-edit-a">
          <div className="container__profile_addCr">
            <form className="edit_inputForms">
              <h1 className="section__page_title">Add criminal page </h1>

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
                <label htmlFor="name">Crime Description</label>
                <input
                  type="text"
                  name="crimeType"
                  value={crimeDescription}
                  onChange={(e) => setCrimeDescription(e.target.value)}
                />
              </div>

              <div className="edit_inputs ">
                <label htmlFor="name">Date of sentence</label>
                <input
                  type="date"
                  name="dateOfSentence"
                  value={dateOfSentence}
                  onChange={(e) => setdateOfSentence(e.target.value)}
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
                  onClick={handleSubmit}>
                  {isEdit ? "Edit" : "Add"} Criminal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addcriminal;
