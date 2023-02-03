//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  
  const [mode, setMode] = useState('light');

  const togglemode =()=>{

    if(mode === 'light')
     {
        setMode('dark');
        document.body.style.backgroundColor = 'grey'
     }
    else
     {
      setMode('light');
      document.body.style.backgroundColor = 'white'
     }

  }
 
  return (

<>
    <Router>
      

      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/home" element={<TextForm heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>

    </>
  );
}

export default App;
