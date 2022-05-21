import React from "react";
import { Carousel } from "react-bootstrap";
import './HomeCarousel.css';

const HomeCarousel = () => {
  return (
    <div className="container ">
      <h1 className="tc">What People are Saying</h1>

      <div className="col-lg-12">
        <Carousel>
          <Carousel.Item interval={3000}>
            <div className="carousel_para_div">
              <p className="carousel_para tc ma_tb">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur soluta labore! Lorem ipsum dolor  sit amet consectetur adipisicing elit. Rerum
                assumenda nisi praesentium, doloremque atque inventore sequi
                eius non itaque enim. Alias, dolorem quaerat! Nobis incidunt
                placeat accusantium praesentium quos minus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur exercitationem aperiam voluptatum? Magni, aliquid blanditiis dolorem tempora consequuntur facere eum possimus unde ex sint suscipit ipsum repellendus sequi dicta accusamus magnam velit recusandae, inventore atque excepturi illum, debitis voluptate. Voluptatem dignissimos, sequi voluptatum veniam suscipit molestias odit saepe dolorem ea.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="carousel_para_div">
              <p className="carousel_para tc ma_tb">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur soluta labore! Lorem ipsum dolor  sit amet consectetur adipisicing elit. Rerum
                assumenda nisi praesentium, doloremque atque inventore sequi
                eius non itaque enim. Alias, dolorem quaerat! Nobis incidunt
                placeat accusantium praesentium quos minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa laborum neque porro. Hic repellat dicta rerum delectus aperiam alias quasi? Dolores ipsum labore non, delectus, cum dolore aliquam hic amet quas animi libero deleniti voluptatum, consequuntur similique velit explicabo voluptatem cumque pariatur iure quibusdam totam placeat repellat porro eius.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div className="carousel_para_div">
              <p className="carousel_para tc ma_tb">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur soluta labore! Lorem ipsum dolor  sit amet consectetur adipisicing elit. Rerum
                assumenda nisi praesentium, doloremque atque inventore sequi
                eius non itaque enim. Alias, dolorem quaerat! Nobis incidunt
                placeat accusantium praesentium quos minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id iure laboriosam veniam? Accusamus ratione natus voluptatum numquam vel totam reiciendis a praesentium blanditiis obcaecati? Maiores, sapiente corporis. Omnis mollitia quod harum veniam voluptas ea nesciunt nemo facilis tempora, eaque ex modi? In dolorum eius tempore architecto est dignissimos molestias!
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
