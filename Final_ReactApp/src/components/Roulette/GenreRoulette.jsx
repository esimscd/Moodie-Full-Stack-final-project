// This page lets the user select a movie genre before spinning a wheel for a random film.
// We use React for state and effects, and React Router for navigation between pages.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// We import our custom styles and reusable components like the navbar and footer
import "../../styles/GenreRoulette.css";
import StartAgainNavbar from "../navbar/StartAgainNavbar";
import Footer from "../Footer";

// This is our API key for accessing the TMDB (The Movie Database) API
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// This object maps genre names to fun emojis to make the genre buttons more visually engaging
const genreEmojis = {
  Action: "🔥",
  Adventure: "🧭",
  Animation: "🎨",
  Comedy: "😂",
  Crime: "🕵️‍♂️",
  Documentary: "📚",
  Drama: "🎭",
  Family: "👨‍👩‍👧",
  Fantasy: "🧙‍♂️",
  History: "🧻",
  Horror: "👻",
  Music: "🎵",
  Mystery: "🕵️",
  Romance: "❤️",
  "Science Fiction": "🚀",
  "TV Movie": "📺",
  Thriller: "🔪",
  War: "⚔️",
  Western: "🤠",
};

// This is the main component that renders the genre selection page
const GenreRoulette = () => {
  const [genres, setGenres] = useState([]); // This holds the list of genres from the API
  const navigate = useNavigate(); // This lets us redirect the user to another page when they click a genre

  // When the page loads, we fetch a list of movie genres from TMDB and save it to state
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.genres)) // Save the genres in our state
      .catch((err) => console.error("Failed to fetch genres", err)); // Log any errors
  }, []);

  // This function gives us an emoji for each genre; if there's no match, we show a clapperboard 🎬
  const getEmoji = (name) => genreEmojis[name] || "🎬";

  // Now we return the page layout
  return (
    <>
      {/* Navbar appears at the top to allow the user to restart or go home */}
      <StartAgainNavbar />

      <div className="genre-page">
        <h1 className="genre-title">Choose a genre</h1>

        {/* This is the grid of genre buttons */}
        <div className="genre-wrapper">
          <div className="genre-grid">
            {genres.map((genre) => (
              <button
                key={genre.id}
                className="genre-btn"
                onClick={() => navigate(`/randomise?genre=${genre.id}`)} // Clicking takes user to roulette spin page with selected genre
              >
                <div className="emoji">{getEmoji(genre.name)}</div>
                <span>{genre.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer appears at the bottom for consistent layout */}
      <Footer />
    </>
  );
};

export default GenreRoulette;
