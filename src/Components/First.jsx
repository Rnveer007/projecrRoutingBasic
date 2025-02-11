import React from 'react'
import Header from './Header';
import Footer from './Footer' 
import Home from './Home';
import { Outlet } from 'react-router-dom'; 
function First() {
  return (
    <>
    <Header />
    {/* <Outlet /> */}
    <Home />
    <Footer />
    </>
  )
}

export default First