import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../../Constant";
import "./CommonPages.css";

const ProductAdmin = () => {
  const [productInputs, setProductInputs] = useState({
    name: "",
    description: "",
    category: "",
  });
  const [images, setImages] = useState([]);

  const handleInputs = (e) => {
    e.persist();
    setProductInputs({ ...productInputs, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setImages({ image: e.target.files[0] });
  };

  const submitProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", images.image);
    formData.append("name", productInputs.name);
    formData.append("description", productInputs.description);
    formData.append("category", productInputs.category);

    axios
      .post(`${baseUrl}/product/`, formData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.status === 201) {
          alert("Product Added Successfully!!!");
          setProductInputs({
            name: "",
            description: "",
            category: "",
          });
          setImages([]);
        } else {
          alert("Please Add the valid information of your product");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
              <div className="admin_product_heading">
                <h3 className="admin_title ma_tb tc">Add Product Here</h3>
              </div>

              <form onSubmit={submitProduct} encType="multipart/form-data">
                <div className="form-group">
                  <input
                    className="form-control custom_form_input_style"
                    type="text"
                    name="name"
                    onChange={handleInputs}
                    value={productInputs.name}
                    placeholder="Product Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control custom_form_input_style"
                    type="text"
                    name="description"
                    onChange={handleInputs}
                    value={productInputs.description}
                    placeholder="Product Description"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control custom_form_input_style interest_location ma_b"
                    name="category"
                    onChange={handleInputs}
                    value={productInputs.category}
                  >
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="table">Table</option>
                    <option value="h_items">Hospital Items</option>
                  </select>

                  {/* <input
                className="form-control custom_form_input_style"
                  type="text"
                  name="category"
                  onChange={handleInputs}
                  value={productInputs.category}
                  placeholder="Product Category"
                /> */}
                </div>
                <div className="form-group">
                  <input
                    className="form-control custom_form_input_style"
                    type="file"
                    onChange={handleImage}
                    name="image"
                  />
                </div>
                <div className="custom_form_btn_div">
                  <button
                    type="submit"
                    className="tc custom_form_btn_div  btn btn-outline-success"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default ProductAdmin;
