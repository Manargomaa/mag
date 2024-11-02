// AboutStory.js
import React from 'react';
import "./AboutStory.css";
import AboutHome from "../../../Assites/Images/About/AboutHome.png";

const AboutStory = () => {
  return (
    <div className="about-content px-0">
      <div className="row about-content-box">
        <div className="col-md-6 about-home-text">
          <h2 className="about-home-title">Our <span>Story</span></h2>
          <p className="about-home-description">
            Launched in 2024, Exclusive is South Asia's premier online Grocery marketplace with an active presence in Bangladesh. Supported by a wide range of marketing, data, and service solutions, Exclusive has 10,500 sellers and serves over 3 million customers.
            Launched in 2024, Exclusive is South Asia's premier online Grocery marketplace with an active presence in Bangladesh. Supported by a wide range of marketing, data, and service solutions, Exclusive has 10,500 sellers and serves over 3 million customers.
          </p>
          <p className="about-home-description">
            Exclusive offers a diverse assortment in categories ranging from consumer goods, growing fast with over 1 million products.
            Exclusive offers a diverse assortment in categories ranging from consumer goods, growing fast with over 1 million products.
          </p>
          <button className="about-home-btn">Learn More</button>
        </div>
        <div className="col-md-6 about-home-image">
          <img src={AboutHome} alt='our story img' />
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
