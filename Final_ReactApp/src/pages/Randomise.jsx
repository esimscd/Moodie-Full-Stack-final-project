import React from "react";
import StartMoodieNavbar from "../components/navbar/StartMoodieNavbar";
import GenreSpinny from "../components/Roulette/GenreRoulette"; // Imports the main wheel component

const Randomise = () => {
  return (
    <>
      <StartMoodieNavbar />
      <h1>This is the Randomise page!</h1>
      <GenreSpinny />
    </>
  );
};

export default Randomise;
