import React from "react";
import "./ProductHeader.css";

const ProductHeader = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Our Products</h1>
          </div>
          <div className="col-lg-6">
            <ul>
              <li className="product_list_head_items">
                Sort By
                <span>
                  <i className="fas custom_icons fa-align-left"></i>
                </span>
              </li>
              <li className="product_list_head_items">
                Filter
                <span>
                  <i className="fas custom_icons fa-filter"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
