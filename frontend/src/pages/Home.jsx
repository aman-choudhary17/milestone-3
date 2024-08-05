import React from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Main, Slider } from "../components";

export const Home = () => {
  return (
    <>
    <Navbar isShow={true} />
    <Main />
    <Slider />
  </>
  )
}
