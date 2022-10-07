import React from 'react';
import { Routes, Route} from "react-router-dom"
import '../App.css';
import Home from "./Home";
import Login from './Login';
import NavBar from './NavBar';
import AboutSection from './AboutSection';
import FooterSection from './FooterSection';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
       <FooterSection/>
    </div>
  );
}

export default App;
