import React from "react";

import "./Header.scss";

import Button from "./common/Button";

import logo from "../images/logo.svg";

function Header(): JSX.Element {
  const showAction = false;
  function handleClick() {
    return;
  }
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      {showAction && (
        <Button
          variant="outlined-dark"
          label="My albums"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default Header;
