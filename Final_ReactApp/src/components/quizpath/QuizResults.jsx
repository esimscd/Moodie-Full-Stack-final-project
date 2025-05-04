import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/ResultsPage.css";
import StartAgainNavbar from "../navbar/StartAgainNavbar";
import popcornLogo from "../../assets/logos/moodie-popcorn.png";

//Import API key from env file for access
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

//Quiz answers passed in as prop to be used in api filtering
const QuizResults = ({ quizAnswers }) => {
  const [movies, setMovies] = useState([]);
  const [genreMap, setGenreMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const movieIdParam = new URLSearchParams(location.search).get("movieId");

  // Fetch genre list once and map ids to names
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        const mapping = {};
        data.genres.forEach((g) => {
          mapping[g.id] = g.name;
        });
        setGenreMap(mapping);
      })
      .catch((err) => console.error("Failed to fetch genre list", err));
  }, []);

  //Fetch movie(s) based on quiz answers or selected movie ID
  useEffect(() => {
    const fetchMovies = () => {
      setLoading(true);

      if (movieIdParam) {
        fetch(
          `https://api.themoviedb.org/3/movie/${movieIdParam}?api_key=${API_KEY}&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data && data.id) {
              setMovies([data]);
            } else {
              setError("Movie not found.");
            }
          })
          .catch((err) => {
            console.error(err);
            setError("Something went wrong, please try again later.");
          })
          .finally(() => setLoading(false));

        return;
      }

      if (!quizAnswers) {
        setError("No quiz data or movie provided.");
        setLoading(false);
        return;
      }

      // combine genres to result for genre 1 or genre 2
      const genreInput = [
        quizAnswers.eveningGenre,
        quizAnswers.endingGenre,
      ].join("|");

      //Set up of search parameter variables such as release year and runtime
      const params = new URLSearchParams({
        api_key: API_KEY,
        with_genres: genreInput,
        "primary_release_date.gte": quizAnswers.filmReleaseDate.start,
        "primary_release_date.lte": quizAnswers.filmReleaseDate.end,
        "vote_average.gte": quizAnswers.voteAverage,
        "with_runtime.gte": quizAnswers.runTime,
        "with_runtime.lte": quizAnswers.runTime + 60,
        include_adult: false,
      });

      // URL used to query TMBD API
      const url = `https://api.themoviedb.org/3/discover/movie?${params.toString()}`; //Parameter converted to string

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          //Handling in case of no results returned
          if (data.results?.length > 0) {
            const shuffled = [...data.results].sort(() => 0.5 - Math.random());
            setMovies(shuffled.slice(0, 1));
          } else {
            setError("No matching movies found. Try adjusting your answers.");
          }
        }) 
        //Handling incase unable to fetch
        .catch((err) => {
          console.error(err);
          setError("Something went wrong. Please try again later.");
        })
        .finally(() => setLoading(false));
    };

    fetchMovies();
  }, [quizAnswers, movieIdParam]); //Quiz answers and movie id param as dependencies

  // returns film recommendation genre on results page
  const renderGenres = (movie) => {
    const genreIds =
      movie.genre_ids || (movie.genres ? movie.genres.map((g) => g.id) : []);
    return (
      genreIds
        .map((id) => genreMap[id])
        .filter(Boolean)
        .join(", ") || "N/A"
    );
  };

  return (
    <>
      <StartAgainNavbar />
      <div className="quiz-results-container">
        <img src={popcornLogo} alt="Popcorn" className="popcorn-bg" />
        <h1 className="quiz-results-heading">Moodie Recommends</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <div className="detail-row">
                <span className="detail-label">Title:</span>
                <div className="detail-box">{movie.title}</div>
              </div>
              <div className="detail-row">
                <span className="detail-label">Genre:</span>
                <div className="detail-box">{renderGenres(movie)}</div>
              </div>
              <div className="detail-row synopsis-row">
                <span className="detail-label">Synopsis:</span>
                <div className="detail-box">{movie.overview}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuizResults;
