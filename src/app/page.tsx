"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function Root() {
  const [currPage, setCurrPage] = useState<number>(0);
  return (
    <div className="w-screen h-screen flex">
      <Navbar currPage={currPage} setCurrPage={setCurrPage} />
      <div className="w-full h-screen">
        {currPage === 0 && <Home />}
        {currPage === 1 && <About />}
        {currPage === 2 && <Projects />}
        {currPage === 3 && <Contact />}
      </div>
    </div>
  );
}
