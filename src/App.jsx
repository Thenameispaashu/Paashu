import React from "react";
import "../src/App.css";
import Navbar from "./conponents/Navbar/Navbar";
import Hero from "./conponents/Hero/Hero";
import Skills from "./conponents/Skills/Skills";
import WorkExperience from "./conponents/WorkExperience/WorkExperience";
import ContactMe from "./conponents/ContactMe/ContactMe";
import Footer from "./conponents/Footer/Footer";

const App =() => {
  return (
   <>
   <Navbar />
   <div className="container">
   <Hero/>
   <Skills/>
   <WorkExperience/>
   <ContactMe/>
   </div>
   <Footer/>
   
   </>
  );
};

export default App;