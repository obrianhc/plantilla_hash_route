import './App.css';
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './Components/Navbar';
import Dashboard from './Modules/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div id="App">
        <Routes>
          <Route exact path="/" element={<Navigate to="/dashboard"/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
