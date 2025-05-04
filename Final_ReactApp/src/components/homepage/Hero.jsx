import "../../styles/homepage.css";
import HeroImg from "../../assets/heroimage.png";
import Camera from "../../assets/camera.png";
import Popcorn from "../../assets/logos/moodie-popcorn.png";

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
        <div className="mobile-tablet-hero-container">
          <div className="popcorn-img-container">
            <img className="popcorn-bg" src={Popcorn} alt="" />
          </div>

          <div className="mobile-hero-content">
            <img src={HeroImg} />
            <p className="hero-slogan">Let your mood pick the movie</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
