
import './App.css';
import CampusAmbassador from './Components/Landing/Page_3/CampusAmbassador';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing4 from "../src/Components/Landing/Landing4/Landing4.js";
import React from "react";
import Landing1 from "../src/Components/Landing/Landing1/Landing1.js"
import { Main } from './Components/Landing/Landing1/Main.jsx';


function App() {
  return (
    <div className="App">

    
      <Router>
        <Routes>

         
          <Route path='/' element={<Main />} />
          <Route path='/land' element={<Landing1 />} />
          <Route path='/landing4' element={<Landing4 />} />
          <Route path='/landing3' element={<CampusAmbassador />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
