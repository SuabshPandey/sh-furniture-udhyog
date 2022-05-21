import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import baseUrl from "../../../Constant";
import "./CommonPages.css";

// import Admin from "../Admin";
// import { BrowserRouter} from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [product, setProduct] = useState([]);

  useEffect((res) => {
    axios
      .get(`${baseUrl}/product/`)
      .then((res) => {
        console.log(res.data[0].name);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 side_nav_div">
            <div className="row">
              <div className="col-lg-12">
                <NavLink
                  activeClassName=""
                  className=" admin_items btn btn-ouline-success"
                  to="/admin/dashboard"
                >
                  <span>
                    <i class="fas fa-columns"></i>
                  </span>
                  Dashboard
                </NavLink>
              </div>
              <div className="col-lg-12">
                <NavLink
                  activeClassName="menu_active"
                  className="admin_items btn btn-ouline-success"
                  to="/admin/adminproduct"
                >
                  <span>
                    <i class="fas fa-cube"></i>
                  </span>
                  Products
                </NavLink>
              </div>
              <div className="col-lg-12">
                <NavLink
                  activeClassName="menu_active"
                  className="admin_items btn btn-ouline-success"
                  to="/admin/orderproduct"
                >
                  <span>
                    <i class="fas fa-folder"></i>
                  </span>
                  Orders
                </NavLink>
              </div>
              <div className="col-lg-12">
                <NavLink
                  activeClassName="menu_active"
                  className="admin_items btn btn-ouline-success"
                  to="/admin/customers"
                >
                  <span>
                    <i class="fas fa-address-card"></i>
                  </span>
                  Customers
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="p-2">
              <h3 className="tc admin_title ma_tb">
                <span>
                  <i class="fas fa-user-lock"></i>
                </span>
                ADMIN DASHBOARD
              </h3>
              <hr />
              <div className="dashboard_heading d-flex ">
                <h4 className=" ma_tb">Available Products</h4>
                <NavLink to="/admin/adminproduct">
                  <h4 className=" ma_tb">
                    <span>
                      <i class="fas fa-plus"></i>
                    </span>
                    Add New Product
                  </h4>
                </NavLink>
              </div>

              <div className="row">
                {product.map((items) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="admin_product_div ma_tb ">
                        <img
                          src={items.image}
                          alt="admin_product_img"
                          className="home_products_image"
                        />
                      </div>
                      <p className="tc">{items.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
