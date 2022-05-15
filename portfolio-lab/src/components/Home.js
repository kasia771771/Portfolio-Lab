import React from 'react';
import Header from './Header';
import ThreeColumns from './ThreeColumns';
import Steps from './Steps';
import About from './About';
import Carousel from './Carousel';

export default function Home() {
  return (
    <>
      <Header/>
      <ThreeColumns/>
      <Steps/>
      <About/>
      <Carousel/>
    </>
  )
}
