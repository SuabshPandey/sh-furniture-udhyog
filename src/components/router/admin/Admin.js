import React from "react";
import { NavLink} from "react-router-dom";
import "./Admin.css";


const Admin = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <NavLink className="admin_items btn btn-ouline-success" to="/admin/dashboard">Dashboard</NavLink>
              </div>
              <div className="col-lg-12">
                <NavLink className="admin_items btn btn-ouline-success" to="/admin/adminproduct">Products</NavLink>
              </div>
              <div className="col-lg-12">
                <NavLink className="admin_items btn btn-ouline-success" to="/admin/orderproduct">Orders</NavLink>
              </div>
              <div className="col-lg-12">
                <NavLink className="admin_items btn btn-ouline-success" to="/admin/customers">Customers</NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
