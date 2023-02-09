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

export default function TheApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        <Route
          path="/"
          element={<SearchBar />}
        />
      </Routes>
    </Router>
  );
}
