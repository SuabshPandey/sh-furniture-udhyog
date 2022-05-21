import React , {useState , useEffect} from "react";
// import homeProductsList from "./HomeProductList";
import baseUrl from "../Constant";
import "./HomeProduct.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const HomeProduct = () => {
  const [product , setProduct] = useState([]);


  useEffect(() => {
    axios.get(`${baseUrl}/product/`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    }).catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div>
      <div className="container ma_tb tc">
        <div className="home_product_title_div">
          <h1 className="home_product_title">Our Products</h1>
        </div>
        <div className="home_product_items">
          <div className="row">
            {product.map((items) => {
              return (
                <div className="col-lg-4">
                  <div className="home_products_image_div ma_tb" key={items.id}>
                    <NavLink to={`/productdetails/${items.name}`}> <img
                      src={items.image}
                      alt="home_products_img"
                      className="home_products_image"
                    /> </NavLink>
                  </div>
                  <div className="home_products_heading_di">
                    <h4 className="home_products_name tc">{items.name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="btn  tc ma_tb product_browse_btn">
            <NavLink className="browse_all_btn" to="/products">Browse All</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
