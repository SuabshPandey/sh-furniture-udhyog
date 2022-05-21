import React  from "react";
import featureList from "./FeaturedList";
import "./FeaturedHome.css";

const FeaturedHome = () => {
    

  return (
    <div>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <h1 className="tc ma_tb">Featured Categories</h1>
        <div className="row">
          {featureList.map((items) => {
            return (
              <div className="col-lg-4 category_div" key={items.id}>
                <img className="category_img" src={items.image} alt="yo yo" />
                <h4 className="tc">{items.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHome;
