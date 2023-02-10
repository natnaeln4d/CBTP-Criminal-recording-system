import axios from "axios";
import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Sidebar from "../../../SIdebar/Sidebar";
import { AiFillWarning } from "react-icons/ai";
// import axios from "axios";

function AddAdmin() {
  const [passType, setPassType] = useState("password");
  const [show, setShow] = useState(<AiFillEyeInvisible />);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState("");
  const [role, setRole] = useState("Officer");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    // const emailInput = document.querySelector(".emailInput");
    // const passwordlInput = document.querySelector(".passwordInput");
    // const email = emailInput.value;
    // const password = passwordlInput.value;

    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/superadmin/addUser",
        {
          name,
          address,
          age,
          password,
          confirmPassword,
          email: user,
          role,
          phone,
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
  //show or hide password
  const showPass = (e) => {
    e.preventDefault();
    if (passType === "password") {
      setPassType("text");
      setShow(<AiFillEye />);
    } else {
      setPassType("password");
      setShow(<AiFillEyeInvisible />);
    }
  };

  return (
    <div className="sectionContainer">
      <div className="section">
        <Sidebar />
        <div className="contents-x">
          <div className="container-xP-edit-a">
            <div className="container__profile_addCr">
              <form className="edit_inputForms">
                <h1 className="section__page_title">Add Admin page </h1>
                {error && (
                  <div className="error__credential">
                    <AiFillWarning />
                    <p>{errorMsg}</p>
                  </div>
                )}

                <div className="edit_inputs ">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="edit_inputs ">
                  <label htmlFor="name">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div className="edit_inputs ">
                  <label htmlFor="name">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone +251"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="edit_inputs ">
                  <label htmlFor="name">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="edit_inputs ">
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    name="address"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>

                <div className="edit_inputs ">
                  <label htmlFor="name">Roles</label>
                  <select
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}>
                    <option>SuperAdmin</option>
                    <option>Admin</option>
                    <option>Officer</option>
                  </select>
                </div>

                <div className="edit_inputs pswd__area">
                  <label htmlFor="name">Password</label>
                  <input
                    type={passType}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pswd__area"
                  />

                  <button
                    className="show__pswd"
                    onClick={showPass}>
                    {" "}
                    {show}{" "}
                  </button>
                </div>

                <div className="edit_inputs pswd__area">
                  <label htmlFor="name">Confirm Password</label>
                  <input
                    type={passType}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pswd__area"
                  />

                  {/* <button className='show__pswd' onClick={showPass}>  {show } </button> */}
                </div>

                <div className="edit_inputs ">
                  <button
                    name=""
                    className="sign-btn add__criminal"
                    onClick={handleSubmit}>
                    {isEdit ? "Edit" : "Add"} Admin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
