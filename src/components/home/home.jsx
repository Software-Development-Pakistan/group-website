import React from "react";
import FeatureWrapper from "./featureWrapper";
import BannerWrapper from "./bannerWrapper";
import MainWrapper from "./main/mainWrapper";
import Slider from "react-slick";
import homecss from './home.css';
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>Join our open source projects</h3>
        </div>
        <div>
          <h3>Or may be the bootcamp</h3>
        </div>
        <div>
          <h3>Become a teacher</h3>
        </div>
        <div>
          <h3>A reliable platform</h3>
        </div>
      </Slider>
      <FeatureWrapper />
      <BannerWrapper />
      <MainWrapper />
    </div>
  );
};

export default Home;
