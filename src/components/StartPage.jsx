import React from "react";
import Earthquake from "./Earthquake";
import Footer from "./Footer";
import ClimaticPop from "./ClimaticPop";
import CardComponentQuake from "./CardComponentQuake";
import Header from "./Header";
import { Route, Routes } from 'react-router-dom';
import Start from "./Start";
import Floods from "./Floods";
import About from "./About";
import Map from "./Map";
import Earthquakedata from "./Earthquakedata";



const StartPage = () => {
  return (
  <>
    <Header/>
    <div>
      <Start/>
      <Earthquake/>
      <ClimaticPop/>
      <Floods/>
      <CardComponentQuake/>
    </div>
    <Footer/>

  </>  
  );
};

export default StartPage;
