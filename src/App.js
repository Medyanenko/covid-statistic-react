import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import World from './components/Content/World/World';
import Country from './components/Content/Country/Country';
import About from './components/Content/About/About';

function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'> 
      <Navbar/>
      <div className='app-wrapper-content'>
      <Routes>
          <Route path="/world/*" element={<World/>}/>
          <Route path="/country/*" element= {<Country/>}/>
          <Route path="/about/*" element= {<About/>}/>
      </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
