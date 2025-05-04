import React, { useEffect } from "react";
import HomeNavbar from "../components/navbar/HomeNavbar";
import "../styles/homepage.css";
import Hero from "../components/homepage/Hero";
import About from "../components/homepage/About";
import Start from "../components/homepage/Start";
import Creators from "../components/homepage/Creators";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    // Scroll to the section when the page loads or the hash changes
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // This removes the '#' from the hash: e.g #about-section = about-section
        const section = document.getElementById(hash.substring(1));
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 95, // Navbar height takes up 95px of the page, we want the original height
            behavior: "smooth",
          });
        }
      }
    };

    handleScrollToHash();
    window.addEventListener("hashchange", handleScrollToHash); // Listen for section changes

    return () => {
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, []);
  return (
    <>
      <HomeNavbar />
      <Hero />
      <About />
      <Start />
      <Creators />
      <Footer />
    </>
  );
};

export default Home;
