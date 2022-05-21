import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
    <div className="container-fluid bg_header">
        <div className="container">
            <Navbar expand="lg">
              <Navbar.Brand>

              <NavLink className="navbar-brand" to="/">
                <div className="logo_div">
                  <img className="logo_img" src="images/logo.png" alt="Logo" />
                </div>
              </NavLink>



              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" nav_link_items">
                <NavLink
                    //   activeClassName="menu_active"
                      className="nav-link custom_nav_link "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                <NavLink
                      activeClassName="menu_active"
                      className="nav-link custom_nav_link "
                      aria-current="page"
                      to="/products"
                    >
                      Products
                    </NavLink>
                <NavLink
                      activeClassName="menu_active"
                      className="nav-link custom_nav_link "
                      aria-current="page"
                      to="/placeorder"
                    >
                      Place Order
                    </NavLink>
                {/* <NavLink
                      activeClassName="menu_active"
                      className="nav-link custom_nav_link "
                      aria-current="page"
                      to="/admin/dashboard"
                    >
                      ADMIN
                    </NavLink> */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
      </div>
      </div>
  );
};

export default Header;
