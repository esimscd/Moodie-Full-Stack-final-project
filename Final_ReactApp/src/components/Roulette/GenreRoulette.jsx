import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/GenreRoulette.css";
import StartAgainNavbar from "../navbar/StartAgainNavbar";
import Footer from "../Footer";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

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

const GenreRoulette = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error("Failed to fetch genres", err));
  }, []);

  const getEmoji = (name) => genreEmojis[name] || "🎬";

  return (
    <>
      <StartAgainNavbar />
      <div className="genre-page">
        <h1 className="genre-title">Choose a genre</h1>
        <div className="genre-wrapper">
          <div className="genre-grid">
            {genres.map((genre) => (
              <button
                key={genre.id}
                className="genre-btn"
                onClick={() => navigate(`/randomise?genre=${genre.id}`)}
              >
                <div className="emoji">{getEmoji(genre.name)}</div>
                <span>{genre.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GenreRoulette;
