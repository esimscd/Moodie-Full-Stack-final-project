import React, { useState, useEffect } from "react";

const API_KEY = "39b6478c947539cc4929cc5746e3fd48"


const Results = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    const mockGenre = 35 ; //just to test call is working, will replace with actual useer input
    const mockRuntime = 90;


    const params = new URLSearchParams({
    api_key: API_KEY,
    with_genres: mockGenre,
    "with_runtime.gte": mockRuntime,
    "with_runtime.lte": mockRuntime + 30,
    });

    const url = `https://api.themoviedb.org/3/discover/movie?${params.toString()}`;

    const fetchMovies = async () => { 
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    const randomIndex = Math.floor(Math.random() * results.length);
    const randomMovie = results[randomIndex];

    setMovies(randomMovie);
    };

fetchMovies();
}, []);

return (
    <div className="movie-card">
        <h3>{movies.title}</h3>
        <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title} />
        <p>{movies.overview}</p>
        <p>Release Date: {movies.release_date}</p>
        <p>Runtime: {movies.runtime} minutes</p>
    </div>
)
};

export default Results;