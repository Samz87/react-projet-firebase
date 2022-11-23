import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
