import './App.css';
import Footer from './componets/Footer/Footer';
import Navbar from './componets/Navbar/Navbar';
import Sidebar from './componets/SIdebar/Sidebar';

function App() {
  return (
    <div className="w-[100%]">
      <Navbar />
      <Sidebar />
      <Footer />
   
    </div>
  );
}

export default App;
