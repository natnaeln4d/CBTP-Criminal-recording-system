import './App.css';
import SearchBar from './componets/Container/searchBar/SearchBar';
import SectionContainer from './componets/Container/Section/SectionContainer';
import Viewall from './componets/Container/Viewall/Viewall';
import Footer from './componets/Footer/Footer';
import Login from './componets/login/Login';
import Navbar from './componets/Navbar/Navbar';
import Sidebar from './componets/SIdebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router, Routes } from 'react-router';

function App() {
  return (
    <div className="w-[100%]">
      <Navbar />

      {/* <SectionContainer /> */}
      {/* <Viewall /> */}
      <SearchBar />
      {/* <Sidebar /> */}

      <Footer />

      {/* <Viewall /> */}
      <SectionContainer />
      {/* <Sidebar /> */}
      {/* <Footer /> */}

       {/* <Login />  */}
      
   
    </div>
 
  );
}

export default App;
