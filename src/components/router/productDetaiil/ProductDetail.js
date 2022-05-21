import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { NavLink } from "react-router-dom";
import baseUrl from "../../Constant";
import axios from "axios";
// import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState([]);
  const matchedName = match.params.name;
  // const productItem = homeProductsList.find( (p) => {
  //     return p.id === matchedId;
  // } );
  // console.log(productItem);
  // console.log("Match" ,matchedId);

  useEffect(() => {
    axios
      .get(`${baseUrl}/product/${matchedName}/`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container ma_tb">
        <div className="row">
          <div className="col-lg-5">
            <div className="product_detail_image_div">
              <img
                src={product.image}
                alt="BlackSofa"
                className="product_detail_image"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="product_detail_title">
              <h3 className="product_detail_name">{product.name}</h3>
            </div>
            <div className="product_detail_body">
              <strong>
                <p className="product_price">Rs 50000 </p>
              </strong>
              <p className="product_desp">{product.description}</p>

              <NavLink
                to={`/placeorder/${product.name}`}
                className="btn btn-outline-dark"
              >
                Proceed to Checkout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
