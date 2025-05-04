// This page allows the user to spin a wheel and randomly select a movie based on the genre they chose in the previous step

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// We import the custom roulette wheel component
import Spinny from "./Spinny";

// We import the CSS and shared components like the navbar and footer
import "../../styles/RandomRoulette.css";
import StartAgainNavbar from "../navbar/StartAgainNavbar";
import Footer from "../Footer";

// This is our API key stored in the environment for security
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function RandomRoulette() {
  // useLocation helps us get the genre from the URL
  const location = useLocation();

  // useNavigate helps us send the user to the next page after they spin
  const navigate = useNavigate();

  // movies holds the list of movie options we fetched based on the selected genre
  const [movies, setMovies] = useState([]);

  // selectedMovie stores the movie the user lands on after spinning
  const [selectedMovie, setSelectedMovie] = useState(null);

  // We get the genre ID from the URL parameters (from the genre selection page)
  const genreParam = new URLSearchParams(location.search).get("genre");

  // When the page loads or the genreParam changes, we fetch movies that match that genre
  useEffect(() => {
    if (!genreParam) return; // If no genre is selected, we don’t do anything

    // Fetch top popular movies for the selected genre
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreParam}&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        // We only keep movies that have a title and poster image
        const filtered = data.results.filter(
          (movie) => movie.title && movie.poster_path
        );
        // Limit to 20 movies to keep the wheel usable and readable
        setMovies(filtered.slice(0, 20));
      })
      .catch((err) => console.error("Failed to fetch movies", err));
  }, [genreParam]);

  // This function runs when the wheel finishes spinning and selects a movie
  const handleFinished = (title) => {
    // Find the full movie object based on the selected title
    const movie = movies.find((m) => m.title === title);
    if (movie) {
      setSelectedMovie(movie);

      // Send the user to the results page and pass the movie ID in the URL
      navigate(`/results?movieId=${movie.id}`);
    }
  };

  return (
    <>
      {/* Navigation bar to go back or start again */}
      <StartAgainNavbar />

      <div className="roulette-page">
        {/* If no genre is found in the URL, show an error message */}
        {!genreParam ? (
          <p style={{ textAlign: "center", color: "red" }}>
            No genre selected.
          </p>
        ) : (
          <>
            <h1 className="roulette-heading">Roulette Mode</h1>

            {/* If movies have loaded, show the spinning wheel */}
            {movies.length > 0 ? (
              <Spinny
                segments={movies.map((movie) => movie.title)} // Each movie title is a slice of the wheel
                onFinished={handleFinished} // When the wheel stops, we handle the result
                primaryColor="#372549"
                contrastColor="#eacdc2"
                buttonText="SPIN"
                size={500}
              />
            ) : (
              <p className="loading-msg">Loading movies...</p> // Loading state
            )}
          </>
        )}
      </div>

      {/* Footer for consistent page layout */}
      <Footer />
    </>
  );
}

export default RandomRoulette;
