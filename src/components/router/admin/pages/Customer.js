import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../../Constant";
import { NavLink } from "react-router-dom";
import "./CommonPages.css";

const Customer = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/order/`)
      .then((res) => {
        // console.log(res.data);
        setCustomer(res.data);
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
                  className="admin_items btn btn-ouline-success"
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
              <h3 className="tc admin_title ma_tb">Customers List </h3>
              <hr />

              <div className="row">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th className="tc" scope="col">
                        Company Name
                      </th>
                      <th className="tc" scope="col">
                        Company Number
                      </th>
                      <th className="tc" scope="col">
                        Comapny Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customer.map((items) => {
                      return (
                        <tr key={items.id}>
                          <td className="tc">{items.companyName}</td>
                          <td className="tc">{items.companyNumber}</td>
                          <td className="tc">{items.companyEmail}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
