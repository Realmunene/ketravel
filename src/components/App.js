import React from 'react';
import { Routes, Route} from "react-router-dom"
import '../App.css';
import Home from "./Home";
import Login from './Login';
import NavBar from './NavBar';
import AboutSection from './AboutSection';
import ContactUs from './ContactUs';
import FooterSection from './FooterSection';
import DestinationCard from './DestinationCard';
function App() {

  return (
    <div className="App">
      {/* To display nav bar */}
      <NavBar/>
      {/* The path ways for the nav bars */}
      <Routes>
      <Route path='/ourPackage' element={<DestinationCard/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
        <FooterSection/> 
    </div>
  );
}

export default App;
