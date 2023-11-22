import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";

import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import HomeAboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import SkillsTitle from "./components/SkillsTitle";
import Information from "./components/Information";
import SendMessage from "./components/SendMessage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
