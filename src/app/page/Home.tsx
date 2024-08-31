import Head from "next/head";
import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/About"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Contact from "./components/Contact"





function Home() {
  return (
    <div>
      <Head>
        <title>My Portfoli</title>
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
   </div>
  );
}

export default Home;
