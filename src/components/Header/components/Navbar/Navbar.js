import React from "react";
import "./Styles/index.scss";
import Logo from "./Icons/Logo.svg";
import CartIcon from "./Icons/Cart.svg";
import CustomButton from "../../../Buttons/CustomButton";
import NavLinks from "../../../Buttons/NavLinks/NavLinks";


const Navbar = ({count, func}) => {
  const countItemsCart = JSON.parse(localStorage.getItem("count-items")).length;

  return (
    <div className={"navbar-border"}>
      <div className={"navbar container"}>
        <div id={"nav-logo"} className={"nav-item navbar-logo-group"}>
          <img className={"navbar-logo"} src={Logo} alt={"logo"}/>
        </div>
        <div id={"nav-links"} className={"nav-item navbar-links-group"}>
          <NavLinks isActive={true}/>
        </div>
        <div id={"nav-search"} className={"nav-item navbar-search-group"}>
          <div className={"navbar-search"}>
            <input onChange={(e) => func(e.currentTarget.value)} placeholder={"Поиск по названию картины"} className={"navbar-search-input"}/>
            <CustomButton className={"navbar-search-button"}>Найти</CustomButton>
          </div>
        </div>
        <div id={"nav-cart"} className={"nav-item navbar-cart-group"}>
          <img className={"cart-icon"} src={CartIcon} alt={"cart-icon"} />
          <div className={"cart-count-items"}>{countItemsCart === 0 ? count === 0 ? 0 : count : countItemsCart}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;