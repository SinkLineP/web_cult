import React from "react";
import Navbar from "./components/Navbar/Navbar";


const Header = ({countItems, func}) => {

  return (
    <Navbar count={countItems.length} func={func} />
  )
}

export default Header;