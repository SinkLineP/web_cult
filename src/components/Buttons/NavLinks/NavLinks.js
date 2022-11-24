import React from "react";

const NavLinks = ({isActive}) => {
  return (
    <>
      <button className={`navbar-links ${isActive ? "active" : ""}`}>Каталог</button>
      <button className={"navbar-links"}>Доставка</button>
      <button className={"navbar-links"}>Оплата</button>
      <button className={"navbar-links"}>Контакты</button>
      <button className={"navbar-links"}>О галерее</button>
    </>
  )
}

export default NavLinks;
