import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  // const [login, setLogin] = useState(false)

  // setLogin(login)
  return (
    <div className="container-fluid bg_footer">
      <div className="container ">
        <div className="row pa_tb">
          <div className="col-lg-4">
            <div className="footer_left_div">
              <div className=" footer_logo_div">
                <img
                  src="images/logo.png"
                  alt="footer_logo"
                  className="footer_logo"
                />
              </div>
              <div className="footer_content_div">
                <p className="footer_content wc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nesciunt ex quod vero inventore voluptate optio
                  magnam dolorem! Maiores numquam, magnam non quo cum laborum
                  quasi magni voluptates voluptatum! Ratione.
                </p>
              </div>
              <div className="">
                <div className="footer_list">
                  <p className="footer_contact wc">
                    <span>
                      <i className="custom_contact_icon  fas fa-map-marker-alt"></i>
                    </span>
                    Kohalpur-11, Banke
                  </p>
                  <p className="footer_contact wc">
                    <span>
                      <i className="custom_contact_icon fas fa-phone-alt"></i>
                    </span>
                    081-542182
                  </p>
                  <p className="footer_contact wc">
                    <span>
                      <i className="custom_contact_icon fas fa-envelope"></i>
                    </span>
                    shfurniture3@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row ">
              <div className="col-lg-12">
                <h1 className="footer_top_heading">Company</h1>
              </div>
              <div className="col-lg-12 ">
                <div className="footer_list_div">
                  <NavLink to="/aboutus" className="footer_list_items">
                    About us
                  </NavLink>
                  <NavLink to="/contact" className="footer_list_items">
                    Contact us
                  </NavLink>

                  <NavLink to="/privacy" className="footer_list_items">
                    Privacy Policy
                  </NavLink>
                  {/* <NavLink to="/refund" className="footer_list_items">
                    Refund Policy
                  </NavLink> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row justify-content-center align-items-center">
              <div className="footer_left_div">
                <div className="row">
                  <h1 className="footer_top_heading">Join With Us</h1>
                </div>
                <div className="social_icons">
                  <span className="">
                  <a href="https://www.facebook.com/shfurnitureudhyog" target="_blank"><i class="fab fa-facebook"></i></a>
                  </span>
                  <span className="">
                    <a href="https://www.facebook.com/shfurnitureudhyog" target="_blank"><i class="fab fa-instagram"></i></a>
                  </span>
                  <span className="">
                    <i class="fab fa-google"></i>
                  </span>
                </div>
                <div className="footer_btn">
                  <NavLink
                    // to="/admin/dashboard"
                    to="/adminlogin"
                    className="btn  custom_footer_btn"
                  >
                    {/* { login ?  "ADMIN LOGIN" : "Logout"} */}
                    ADMIN LOGIN
                    
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
