import React, { useState, useEffect } from "react";

const API_KEY = "39b6478c947539cc4929cc5746e3fd48"


const QuizResults = ({quizAnswers}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    // const mockGenre = 35 ; //just to test call is working, will replace with actual useer input
    const mockRuntime = 90
    const mockVote = 7;

// Set up parameters that match question filters
    const params = new URLSearchParams({
    api_key: API_KEY,
    with_genres: quizAnswers.genre, //Genres listed in number codes on TMDB
    "with_runtime.gte": mockRuntime, //Runtime upper and lower limits
    "with_runtime.lte": mockRuntime + 30,
    "primary_release_date.gte": mockRelease, //Release date range
    "primary_release_date.lte": mockRelease,
    "vote_average.gte": mockVote, //Rating range (0-10 on TMDB)
    "vote_average.lte": mockVote + 2
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

    setMovies(randomMovie);
    };

fetchMovies();
}, [quizAnswers]); //Quiz Answers as dependency 

return (
    <div className="movie-card">
        <h3>{movies.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title} />
        <p>{movies.overview}</p>
        <p>Release Date: {movies.release_date}</p>
    </div> //will add more to this, maybe runtime rating etc?
)
};

export default QuizResults;