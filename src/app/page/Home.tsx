import Head from "next/head";
import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/About"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"






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
      <Footer/>
   </div>
  );
}

export default Home;
