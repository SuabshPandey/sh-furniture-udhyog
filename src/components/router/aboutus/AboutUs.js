import React from "react";
import { Carousel } from "react-bootstrap";
import './AboutUs.css';

const AboutUs = () => {
  return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-0">
              <h1 className="tc  about_desp_title ma_tb">About S.H Furniture Udhyog</h1>
              <h3 className="tc  about_desp_title ma_tb">S.H Furniture Udhyog Family</h3>
              <div className="about_img_div ">
                <img
                  src="/images/about/aboutbanner.jpg"
                  alt="about_img"
                  className="about_img"
                />
              </div>
            </div>
          </div>
          <div className="row bg_about_desp">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="about_desp_div">
                <h3 className="about_desp tc">OUR MISSION</h3>
                <p className="about_desp_para">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi architecto sunt fugiat corrupti explicabo eius neque expedita dolor doloribus, reprehenderit ab asperiores laudantium! Numquam ducimus odio facere? Vero recusandae fugit nobis ipsa deserunt reiciendis assumenda facere tempore nisi et iste eius atque totam, sunt officia. Repellat iure esse natus itaque similique! Optio voluptates, delectus obcaecati est sit eum nihil consequuntur.
                </p>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <h1 className="tc about_desp_title ma_tb">Our Team</h1>

          <div className="row about_team_div justify-content-center        align-items-center">
            <div className="col-lg-6">
              <div className="about_intro_div">
                <h3 className="tc intro_name">MR. Khagendra Lama</h3>
                <p className="tc intro_name">
                  <em> CEO </em>
                  <p> S.H Furniture Udhyog </p>
                </p>
                <p className="intro_position_desp">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, minus dolor. Qui obcaecati alias tempore cupiditate! Sit similique porro beatae saepe temporibus tenetur autem libero voluptatem, ducimus architecto accusamus? Exercitationem praesentium cumque quibusdam ipsa, quos repellat eos tenetur similique rerum provident saepe officiis aut fugit quod vel, distinctio minima odit, pariatur aspernatur sed! Molestias ut, voluptas cupiditate delectus ullam culpa fugit molestiae. Repellendus, officia sed. Quod, hic dicta consequatur eligendi deserunt enim laborum fuga delectus dolor quae ut repudiandae maxime, omnis atque, harum tenetur quam soluta iure aliquam odio commodi nobis ducimus facilis? Commodi odit eveniet, fugit tenetur sit minima.
                </p>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="intro_img_div">
                <img
                  src="/images/about/aboutbanner.jpg"
                  alt="ceo_img"
                  className="intro_img"
                />
              </div>
            </div>
          </div>
          <div className="row about_team_div justify-content-center        align-items-center">
            <div className="col-lg-6 p-0">
              <div className="intro_img_div">
                <img
                  src="/images/product/product1.jpg"
                  alt="rupesh_img"
                  className="intro_img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_intro_div">
                <h3 className="tc intro_name">Mr. Khagendra Lama</h3>
                <p className="tc intro_name">
                  <em> CEO, MeroService </em>
                  <p> MeroService </p>
                </p>
                <p className="intro_position_desp"></p>
              </div>
            </div>
          </div>
          <h1 className="tc about_desp_title ma_tb">Our Partners</h1>

          <div className="row about_team_div justify-content-center        align-items-center">
            <div className="col-lg-6">
              <div className="about_intro_div">
                <h3 className="tc intro_name">Mr. Deepson Shrestha</h3>
                <p className="tc intro_name">
                  <em> Project Manager </em>
                  <p> Mero Service</p>
                </p>
                <p className="intro_position_desp"></p>
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="intro_img_div">
                <img
                  src="/images/product/sofa set.jpg"
                  alt="intro_img"
                  className="intro_img"
                />
              </div>
            </div>
          </div>

          <h1 className="tc about_desp_title ma_tb">Life at S.H Furniture Udhyog</h1>
          <div className="row about_team_div justify-content-center        align-items-center">
            <div className="col-lg-6">
              <div className="about_intro_div">
                <h3 className="tc intro_name">Let's be a part of </h3>
                <p className="tc intro_name">
                  S.H. Furniture Udhyog
                </p>
                <p className="intro_position_desp"></p>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <Carousel fade>
                <Carousel.Item interval={3000}>
                  <div className="carousel_img">
                    <img
                      className="d-block w-100 "
                      src="/images/about/aboutbanner.jpg"
                      alt="First slide"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <div className="carousel_img">
                    <img
                      className="d-block w-100 "
                      src="/images/about/aboutbanner.jpg"
                      alt="First slide"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <div className="carousel_img">
                    <img
                      className="d-block w-100 "
                      src="/images/about/aboutbanner.jpg"
                      alt="First slide"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <h1 className="tc about_desp_title ma_tb">Our Success Stories</h1>
          <div className="success_stories">
            <div className="row">
              <div className="col-lg-12 p-0">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <div className="about_carousel_img">
                      <img
                        className="d-block w-100 "
                        src="/images/about/aboutbanner.jpg"
                        alt="First success"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="about_carousel_img">
                      <img
                        className="d-block w-100 "
                        src="/images/about/aboutbanner.jpg"
                        alt="Second Success"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;
