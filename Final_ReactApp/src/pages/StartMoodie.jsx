import { useEffect } from "react";
import StartMoodieNavbar from "../components/navbar/StartMoodieNavbar";
import Footer from "../components/Footer";
import ChoosePath from "../components/ChoosePath";
import popcornLogo from "../assets/logos/moodie-popcorn.png";

function StartMoodie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StartMoodieNavbar />
      <div className="start-moodie-page">
        <div className="start-moodie-wrapper">
          <img
            src={popcornLogo}
            alt="Moodie Popcorn Logo"
            className="popcorn-background"
          />
          <ChoosePath />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StartMoodie;
