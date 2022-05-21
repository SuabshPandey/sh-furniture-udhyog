import React, { useState, useEffect } from "react";
import baseUrl from "../../../Constant";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./CommonPages.css";

const OrdersAdmin = () => {
  const [order, setOrder] = useState([]);
  // const [complete, setComplete] = useState(false)
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  // const handleCheck = (e) => {
  //   setCheck({ ...check, [e.target.name]: e.target.checked });
  // }

  useEffect(() => {
    axios
      .get(`${baseUrl}/order/`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data[0]);
        console.log(res.data.companyName);
        console.log(res.data[0].complete);
        setOrder(res.data);
        // setComplete(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const response = axios.put(`${baseUrl}/order/$`)
  const handleDeliver = async (e) => {
    e.preventDefault();

    const orderId = e.target.value;
    console.log(orderId);

    const response = await fetch(`${baseUrl}/order/${orderId}/`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        complete: true,
      }),
    });

    const responseData = await response.json();
    console.log(responseData);

    if (response.status === 200) {
      alert("Product has been delivered");
    } else {
      alert("Unable to deliver product");
    }
  };

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
              <h3 className="tc admin_title ma_tb">Ordered Product List</h3>
              <hr />

              <div className="row">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th className="tc table_headings" scope="col">
                        Company Name
                      </th>
                      <th className="tc table_headings" scope="col">
                        Company Location
                      </th>
                      <th className="tc table_headings" scope="col">
                        Company Number
                      </th>
                      <th className="tc table_headings" scope="col">
                        Comapny Email
                      </th>
                      <th className="tc table_headings" scope="col">
                        Delivery Date
                      </th>
                      <th className="tc table_headings" scope="col">
                        Product
                      </th>
                      <th className="tc table_headings" scope="col">
                        Quantity
                      </th>
                      <th className="tc table_headings" scope="col">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.map((items, index) => {
                      return (
                        <tr key={items.id}>
                          <td className="tc custom_table_items">
                            {items.companyName}
                          </td>
                          <td className="tc custom_table_items">
                            {items.companyLocation}
                          </td>
                          <td className="tc custom_table_items">
                            {items.companyNumber}
                          </td>
                          <td className="tc custom_table_items">
                            {items.companyEmail}
                          </td>
                          <td className="tc custom_table_items">
                            {items.desiredDeliveryDate}
                          </td>
                          <td className="tc custom_table_items">
                            {items.product}
                          </td>
                          <td className="tc custom_table_items">{items.qty}</td>
                          <td className="tc custom_table_items">
                            {/* <input type="checkbox" id="complete" name="complete" checked={isChecked} onChange={handleOnChange}/>
                        {isChecked?"Completed":"Incomplete"} */}
                            <button
                              value={items.id}
                              onClick={handleDeliver}
                              className="btn btn-outline-dark"
                            >
                              {items.complete ? "Delivered" : "Not Delivered"}
                            </button>
                          </td>
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

export default OrdersAdmin;
