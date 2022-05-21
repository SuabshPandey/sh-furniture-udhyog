import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import baseUrl from "../../Constant";
import HomeProduct from "../../product/HomeProduct";
import ProductHeader from "./ProductHeader";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/product/`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ProductHeader />
      <hr />

      <div className="home_product_items container">
        <div className="row">
          {products.map((items) => {
            return (
              <div className="col-lg-4">
                <div className="home_products_image_div ma_tb" key={items.id}>
                  <NavLink to={`/productdetails/${items.name}`}>
                    
                    <img
                      src={items.image}
                      alt="home_products_img"
                      className="home_products_image"
                    />
                  </NavLink>
                </div>
                <div className="home_products_heading_di">
                  <h4 className="home_products_name tc">{items.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <HomeProduct /> */}
    </div>
  );
};

export default Products;
