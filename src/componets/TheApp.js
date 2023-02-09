import React from "react";
import SearchBar from "./Container/searchBar/SearchBar";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import {
  Route,
  BrowserRouter as Router,
  redirect,
  Routes,
  Navigate,
  Navigator,
  useNavigate,
} from "react-router-dom";
import Viewall from "./Container/Viewall/Viewall";
import Login from "./login/Login";
import AddAdmin from "./Container/Add/Addadmin/AddAdmin";
import Addcriminal from "./Container/Add/Addcriminal/Addcriminal";
import EditProfile from "./Container/Profile/EditProfile";

export default function TheApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
              path="/viewall" 
              element={<Viewall />} 
              />
             <Route 
              path="/"
              element={<SearchBar />}
              />
              <Route 
              path="addadmin"
              element={<AddAdmin />} 
              />
              <Route 
                path="addcriminal"
                element={<Addcriminal />}
                />
              <Route 
              path="editprofile"
              element={<EditProfile />}
              />


      </Routes>
      <Footer />
    </Router>
   
  );
}
