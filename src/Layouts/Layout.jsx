import React from 'react'
import Footer from "../components/Footer";
import Navber from "../components/Navbar";

function Layout({children}) {
  return (
    <div>
      <Navber/>
       {
          children
       }
       <Footer/>
    </div>
  )
}

export default Layout