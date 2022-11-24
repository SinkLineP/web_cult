import React from "react";
import "./Styles/index.scss";
import FooterLogo from "./Icons/Group.svg";
import NavLinks from "../Buttons/NavLinks/NavLinks";
import phoneIcon from "./Icons/Phone.svg";
import geoLocationIcon from "./Icons/adress.svg";


const Footer = () => {

  return (
    <div className={"footer"}>
      <div className={"container d-flex j-content-sb"}>
        <div className={"d-flex"}>
          <div>
            <img src={FooterLogo} alt={"Footer Logo"} />
          </div>
          <div id={"nav-links"} className={"footer-links-group"}>
            <NavLinks isActive={false}/>
          </div>
        </div>
        <div className={"footer-contact-group d-flex"}>
          <div className={"footer-phone d-flex"}>
            <img className={"footer-icon"} src={phoneIcon} alt={"phone icon"}/>
            <p className={"footer-contact-content"}> +7 (495) 999-99-99</p>
          </div>
          <div className={"footer-address d-flex"}>
            <img className={"footer-icon"} src={geoLocationIcon} alt={"geolocation icon"}/>
            <p className={"footer-contact-content"}> г. Воронеж, ул. Никитина, 119А</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;