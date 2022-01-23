// maket-obolochka
// ()rafce

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import "./layout.css"

// const Layout = ({children}) => {

//const Layout = props => {
//    console.log(props)

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
          {children}
        <Footer />
    </>
  )
}

export default Layout;

//<React.Fragment>
//        <Navbar />
//        <Footer/>
//    </React.Fragment>