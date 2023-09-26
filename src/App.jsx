import { useState } from "react";
import "./App.css";
import Nav from "../src/components/Navbar/Nav";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import About from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";
import Experience from "../src/components/Experience/Experience";
import Services from "../src/components/Services/Services";
import Portfolio from "../src/components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
