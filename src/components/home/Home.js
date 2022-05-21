import React from "react";
import FeaturedHome from "../featured/FeaturedHome";
import HomeCarousel from "../homeCaraousel/HomeCarousel";
import HomeProduct from "../product/HomeProduct";
import Video from "../video/Video";
import './Home.css';

const Home = () => {
  return (
    <div className="home_main_div ">
      <div className="container-fluid p-0">
        <Video />
      </div>
      <div className="container">
          <FeaturedHome />
      </div>
      <hr className="ma_tb" />
      <div className="container">
        <HomeProduct />
      </div>
      <hr />
      <div className="container">
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Home;
