import React, { useState } from 'react';
import './App.css';
import logo from './images/keul_logo.png';

function App() {
  return (
    <div className="App">
       <div className="wrap">
         <header>
           <h1><img src={logo} alt="keul logo" className="keulLogo"></img></h1>
         </header>
       </div>
    </div>
  );
}

export default App;
