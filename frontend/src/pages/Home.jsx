import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Slider, Card } from "../components";

export const Home = () => {
  return (
    <>
      <Navbar isShow={true} />
      <Slider />
      <Card />
    </>
  )
}