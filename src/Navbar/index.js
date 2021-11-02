import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Recipedia</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink data-testid="test-button-signin" to="/sign-in">
            Sign In
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
