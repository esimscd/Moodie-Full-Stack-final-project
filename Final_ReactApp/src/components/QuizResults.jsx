import React, { useState, useEffect } from "react";

const API_KEY = "39b6478c947539cc4929cc5746e3fd48"


const QuizResults = ({quizAnswers}) => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

// Set up parameters that match question filters
    const params = new URLSearchParams({
    api_key: API_KEY,
    with_genres: quizAnswers.genre, //Genres listed in number codes on TMDB
    "with_runtime.gte": quizAnswers.runTime, //Runtime upper and lower limits
    "with_runtime.lte": quizAnswers.runTime + 30,
    "primary_release_date.gte": quizAnswers.filmReleaseDate.start, //Release date range
    "primary_release_date.lte": quizAnswers.filmReleaseDate.end,
    "with_origin_country": quizAnswers.countryOfOrigin,
    "vote_average.gte": quizAnswers.ratingsRange //Rating range (0-10 on TMDB)
    });

    const url = `https://api.themoviedb.org/3/discover/movie?${params.toString()}`;

//API call with URL that updates based on input params
    const fetchMovies = async () => { 

    const response = await fetch(url);
    const data = await response.json(); //Convert results to JSON

    const results = data.results;
    //Randomly select one film to display from list of matching films
    const randomIndex = Math.floor(Math.random() * results.length); 
    const randomMovie = results[randomIndex];
    setMovie(randomMovie);
    console.log(randomMovie)
    };

fetchMovies();
}, [quizAnswers]); //Quiz Answers as dependency 

return (
    <div className="movie-card">
      <h4>Here is your movie recommendation:</h4>
      <h3>{movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
      <p>Overview: {movie.overview}</p>
      <p>Rating: {movie.vote_avergae} /10 </p>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime}</p>
      {movie.genre_ids && (
          <p><strong>Genre IDs:</strong> {movie.genre_ids.join(", ")}</p>
        )}


    </div> //will add more to this, maybe runtime rating etc?
)
};

export default QuizResults;