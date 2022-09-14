import React from "react";

import "./Footer.scss";

import vector from "../images/vector.svg";

function Footer(): JSX.Element {
  return (
    <div className="footer">
      <img className="footer__image" src={vector} alt="logo" />
    </div>
  );
}

export default Footer;
