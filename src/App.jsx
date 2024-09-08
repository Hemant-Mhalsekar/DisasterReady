import React from "react";
import StartPage from "./components/StartPage";
import About from "./components/About";
import Map from "./components/Map";
import Earthquakedata from "./components/Earthquakedata";
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/map" element={<Map />} />
        <Route path="/data" element={<Earthquakedata />} />
      </Routes>
    </div>
  );
}

export default App;
