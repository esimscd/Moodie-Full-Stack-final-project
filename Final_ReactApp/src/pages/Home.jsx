import React, { useState, useEffect } from "react";
import HomeNavbar from "../components/navbar/HomeNavbar";
import "../styles/homepage.css";
import Alissa from "../assets/TeamAvatars/Alissa.png";
import Danni from "../assets/TeamAvatars/Danni.png";
import Gabriella from "../assets/TeamAvatars/Gabriella.png";
import Lisa from "../assets/TeamAvatars/Lisa.jpeg";
import Lizzie from "../assets/TeamAvatars/Lizzie.png";
import Osayi from "../assets/TeamAvatars/Osayi.png";
import Rima from "../assets/TeamAvatars/Rima.png";
import HeroImg from '../assets/heroimage.png'
import Camera from '../assets/camera.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/carousel.css";

const images = [
   { src: Alissa, title: "Documentary: Alissa M Herzog" },
   { src: Danni, title: "Fantasy: Danni" },
   { src: Gabriella, title: "Horror: Gabriella" },
   { src: Lisa, title: "Action: Lisa Fury" },
   { src: Lizzie, title: "Comedy: Lizzie" },
   { src: Osayi, title: "Cartoon: Osayi" },
   { src: Rima, title: "Lorem: Rima" },
];

const Home = () => {
   return (
      <>
         <HomeNavbar />
         <div className="hero-container">
            <div className="left-container">
               <img src={HeroImg} />
               <p className="hero-slogan">Let your mood pick the movie</p>
            </div>
            <div className="right-container">
               <img src={Camera} />
            </div>
         </div>
         <div className="about-container">
            <h1 className="about-title">About Moodie</h1>
            <div className="about-content-container">
               <div className="about-content">
                  <p className="about-text">
                     Lorem ipsum dolor sit amet. Aut veritatis dolore est mollitia
                     velit et atque quia aut eligendi dicta. Eum galisum voluptatem
                     est ratione doloremque est expedita tenetur At quidem
                     laboriosam nam modi assumenda sit beatae odit. Vel temporibus
                     enim in adipisci eius qui doloremque earum non blanditiis
                     delectus est pariatur quos ab omnis voluptatem. Qui
                     necessitatibus saepe rem soluta optio et dolorum nihil quo
                     mollitia quod. Eos dicta praesentium et sequi recusandae est
                     earum nesciunt et accusamus quas et modi labore. Non harum
                     labore aut nihil eaque in laudantium aliquam. 33 atque dolor
                     ut consequatur inventore qui dignissimos quam est nostrum enim
                     non voluptates perspiciatis ut iusto voluptatem.
                  </p> <br />
                  <p className="about-text">
                     Lorem ipsum dolor sit amet. Aut veritatis dolore est mollitia
                     velit et atque quia aut eligendi dicta. Eum galisum voluptatem
                     est ratione doloremque est expedita tenetur At quidem
                     laboriosam nam modi assumenda sit beatae odit. Vel temporibus
                     enim in adipisci eius qui doloremque earum non blanditiis
                     delectus est pariatur quos ab omnis voluptatem. Qui
                     necessitatibus saepe rem soluta optio et dolorum nihil quo
                     mollitia quod. Eos dicta praesentium et sequi recusandae est
                     earum nesciunt et accusamus quas et modi labore. Non harum
                     labore aut nihil eaque in laudantium aliquam. 33 atque dolor
                     ut consequatur inventore qui dignissimos quam est nostrum enim
                     non voluptates perspiciatis ut iusto voluptatem.
                  </p> <br />
                  <p className="about-text">
                     Lorem ipsum dolor sit amet. Aut veritatis dolore est mollitia
                     velit et atque quia aut eligendi dicta. Eum galisum voluptatem
                     est ratione doloremque est expedita tenetur At quidem
                     laboriosam nam modi assumenda sit beatae odit. Vel temporibus
                     enim in adipisci eius qui doloremque earum non blanditiis
                     delectus est pariatur quos ab omnis voluptatem. Qui
                     necessitatibus saepe rem soluta optio et dolorum nihil quo
                     mollitia quod. Eos dicta praesentium et sequi recusandae est
                     earum nesciunt et accusamus quas et modi labore. Non harum
                     labore aut nihil eaque in laudantium aliquam. 33 atque dolor
                     ut consequatur inventore qui dignissimos quam est nostrum enim
                     non voluptates perspiciatis ut iusto voluptatem.
                  </p>

               </div>
            </div>
            
         </div>
         <div className="start-moodie-container">
            <button className="start-moodie-btn">Start Moodie</button>
         </div>
         <div className="the-creators-container">
            <h1 className="the-creators-title">The Creators</h1>
            <div className="carousel-content-container">
               <div className="carousel-container">
                  <Swiper
                     modules={[Navigation, Pagination]}
                     spaceBetween={20}
                     slidesPerView={1}
                     navigation
                     pagination={{ clickable: true }}
                     breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                     }}
                     className="carousel-swiper"
                  >
                     {images.map((image, i) => (
                        <SwiperSlide key={i}>
                           <div className="card">
                              <img src={image.src} alt={image.title} />
                              <div className="name-container">
                                 <p>{image.title}</p>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
            
         </div>
      </>
   );
};

export default Home;
