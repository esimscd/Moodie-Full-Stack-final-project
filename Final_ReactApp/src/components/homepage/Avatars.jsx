import Alissa from "../../assets/TeamAvatars/Alissa.png";
import Danni from "../../assets/TeamAvatars/Danni.png";
import Gabriella from "../../assets/TeamAvatars/Gabriella.png";
import Lisa from "../../assets/TeamAvatars/Lisa.jpeg";
import Lizzie from "../../assets/TeamAvatars/Lizzie.png";
import Osayi from "../../assets/TeamAvatars/Osayi.png";
import Rima from "../../assets/TeamAvatars/Rima.png";
import "../../styles/homepage.css";

const Avatars = () => {
  return (
    <>
      <div className="cards">
        <img src={Alissa} alt="" />
        <div className="name-container">
          <p>Documentary: Alissa M Herzog</p>
        </div>
      </div>
      <div className="cards">
        <img src={Danni} alt="" />
        <div className="name-container">
          <p>Fantasy: Danni</p>
        </div>
      </div>
      <div className="cards">
        <img src={Gabriella} alt="" />
        <div className="name-container">
          <p>Horror: Gabriella</p>
        </div>
      </div>
      <div className="cards">
        <img src={Lisa} alt="" />
        <div className="name-container">
          <p>Action: Lisa Fury</p>
        </div>
      </div>
      <div className="cards">
        <img src={Lizzie} alt="" />
        <div className="name-container">
          <p>Comedy: Lizzie</p>
        </div>
      </div>
      <div className="cards">
        <img src={Osayi} alt="" />
        <div className="name-container">
          <p>Cartoon: Osayi</p>
        </div>
      </div>
      <div className="cards">
        <img src={Rima} alt="" />
        <div className="name-container">
          <p>Romance: Rima</p>
        </div>
      </div>
    </>
  );
};

export default Avatars;
