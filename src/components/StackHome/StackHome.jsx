import React, { useState } from "react";
import "./StackHome.css";
import Header from '../nav/Header'
import Slider from "react-input-slider";
import ImageLive from "../../store/logo/img-live.jpg";
import Cover from "../cover/Cover";

function StackHome() {
  // tab option state
  
  return (
      <>
      <div className="background-box">
      <Header/>
      <Cover/>
      </div>
     
    </>
  );
}

export default StackHome;
