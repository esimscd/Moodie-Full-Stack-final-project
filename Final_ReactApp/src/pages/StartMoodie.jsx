import React from "react";
import StartMoodieNavbar from "../components/navbar/StartMoodieNavbar.jsx"
import Footer from "../components/Footer.jsx"
import ChoosePath from "../components/ChoosePath.jsx";

const StartMoodie = () => {
   return (
      <>
         <StartMoodieNavbar />
         <h1>This is the Start Moodie page!</h1>
         <ChoosePath/>
         <Footer/>
      </>
   );
};

export default StartMoodie;
