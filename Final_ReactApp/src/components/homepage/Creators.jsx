// import { Carousel } from 'primereact/carousel';
import AvatarCarousel from "./AvatarCarousel";

const Creators = () => {
   return (
      <>
         <div id="creators-section" className="the-creators-container">
            <h1 className="the-creators-title">The Creators</h1>
            <div className="carousel-content-container">
               <div className="carousel-container">
                  <AvatarCarousel />
               </div>
            </div>
         </div>

      </>
   );
};

export default Creators;
