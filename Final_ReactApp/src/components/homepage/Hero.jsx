import React from "react";
import "../../styles/homepage.css";
import HeroImg from "../../assets/heroimage.png";
import Camera from '../../assets/camera.png'

const Hero = () => {
   return (
      <>
         
         <div id="hero-section" className="hero-container">
            <div className="left-container">
               <img src={HeroImg} />
               <p className="hero-slogan">Let your mood pick the movie</p>
            </div>
            <div className="right-container">
               <img src={Camera} />
            </div>
         </div>
      </>
   );
};

export default Hero;
