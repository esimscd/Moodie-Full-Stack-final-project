import { useEffect } from "react";
import StartMoodieNavbar from "../components/navbar/StartMoodieNavbar.jsx"
import Footer from "../components/Footer.jsx"
import ChoosePath from "../components/ChoosePath.jsx";

function StartMoodie() {
   
   useEffect(() => {
      window.scrollTo(0,0)
   }, [])

   return (
      <>
         <StartMoodieNavbar />
         <ChoosePath/>
         <Footer/>
      </>
   );
};

export default StartMoodie;
