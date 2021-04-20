import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Northwind </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="form1">Form Demo 1 </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="form2">Form Demo2 </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/ErenAri">GitHub</NavLink>
            </NavItem>
            <CartSummary
              removeFromCart={this.removeFromCart}
              cart={this.props.cart}
            ></CartSummary>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
