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
import ViewAdmin from "./Container/viewAdmin/Admintable/ViewAdmin";
<<<<<<< HEAD
import ViewSinglecriminal from "./Container/Viewall/ViewSinglecriminal";
=======
import Profile from "./Container/Profile/Profile";
>>>>>>> dbc02250fbfb749bf5f36cca61191c90f4574f57

export default function TheApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
              <Route
                path="/"
                element={<Login />}
              />
              <Route
              path="viewall" 
              element={<Viewall />} 
              />
              <Route 
                path="singlecriminal"
                 element={<ViewSinglecriminal />}
                 />
             <Route 
              path="search"
              element={<SearchBar />}
              />
              <Route 
              path="addAdmin"
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

              <Route 
              path="profile" exact='true'
              element={<Profile />}
              />

              < Route 
                path="viewAdmin"
                element={<ViewAdmin />
               }
          />


      </Routes>
      <Footer />
    </Router>
   
  );
}
