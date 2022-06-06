import React from "react";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import Steps from "./Steps";
import About from "./About";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <ThreeColumns />
      <Steps />
      <About />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
}
