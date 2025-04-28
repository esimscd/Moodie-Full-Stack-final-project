import Alissa from "../../assets/TeamAvatars/Alissa.png";
import Danni from "../../assets/TeamAvatars/Danni.png";
import Gabriella from "../../assets/TeamAvatars/Gabriella.png";
import Lisa from "../../assets/TeamAvatars/Lisa.jpeg";
import Lizzie from "../../assets/TeamAvatars/Lizzie.png";
import Osayi from "../../assets/TeamAvatars/Osayi.png";
import Rima from "../../assets/TeamAvatars/Rima.png";
// import Carousel from "react-multi-carousel";
import { Carousel } from 'primereact/carousel';
import "react-multi-carousel/lib/styles.css";
import "../../styles/homepage.css";

const responsive = [
   {
      breakpoint: '3000px',
      numVisible: 5,
      numScroll: 1,
   },
   {
      breakpoint: '2000px',
      numVisible: 4,
      numScroll: 1,
   },
   {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
   },
   {
      breakpoint: '728px',
      numVisible: 2,
      numScroll: 1,
   },
   {
      breakpoint: '464px',
      numVisible: 1,
      numScroll: 1,
   },
];

const images = [
   { src: Alissa, title: "Documentary: Alissa M Herzog" },
   { src: Danni, title: "Fantasy: Danni" },
   { src: Gabriella, title: "Horror: Gabriella" },
   { src: Lisa, title: "Action: Lisa Fury" },
   { src: Lizzie, title: "Comedy: Lizzie" },
   { src: Osayi, title: "Cartoon: Osayi" },
   { src: Rima, title: "Romance: Rima" },
];

// 🔥 This is how you tell Carousel how to display each image
const itemTemplate = (item) => (
   <div className="cards">
      <img src={item.src} alt={item.title} />
      <div className="name-container">
         <p>{item.title}</p>
      </div>
   </div>
);

const AvatarCarousel = () => {
   return (
      <>
         <Carousel 
            value={images} 
            itemTemplate={itemTemplate} 
            responsiveOptions={responsive}
         />
      </>
   );
};

export default AvatarCarousel;
