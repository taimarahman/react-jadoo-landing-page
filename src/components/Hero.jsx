import React from "react";
import heroImg from "../assets/images/Image.png";
import decore1 from "../assets/images/Decore1.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="grid-2 h-full">
          <div className="content">
            <h5 className="tagline .text-xl">
              Best Destinations around the world
            </h5>
            <h1 className="heading text-title ">
              Travel, <span className="decor-2">enjoy</span> and live a new and
              full life
            </h1>
            <p className="description text-base">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="CTA">
              <button className="btn find-btn text-lg">Find out more</button>
              <div className="play-demo">
                <button className="play-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M7.5,0,15,15H0Z"
                      transform="translate(15) rotate(90)"
                      fill="#fff"
                    />
                  </svg>
                </button>
                <p>Play Demo</p>
              </div>
            </div>
          </div>
          <div>
            <div className="panel">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={decore1} alt="" className="decore-1" />
      </div>
      <div className="ellipse"></div>
    </div>
  );
};

export default Hero;
