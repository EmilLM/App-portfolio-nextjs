import React from 'react';
import NavBar from "./Nav/NavBar.jsx";
import Content from "./Content/Content.jsx";

import {Ripple} from "react-preloaders";

export default function App() {
  return (
    <>
      <Ripple background={"linear-gradient(180deg, #0f0c29, #302b63, #24243e)"} color={"white"} />
      <NavBar/>
      <Content/> 
    </>

  )
}