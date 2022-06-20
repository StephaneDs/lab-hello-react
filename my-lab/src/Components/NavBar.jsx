import React from "react"
import logo from "./../images/ironhack-logo-xs.png"
import menu from "./../images/menu-top-xs.png"

const NavBar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <img src={menu} alt="menu" />
    </div>
  )
}

export default NavBar
