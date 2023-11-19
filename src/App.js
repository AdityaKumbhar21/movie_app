import React, { useState, useEffect } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

// 5b719ead

const App = () =>{

    const [movies, setMovies] = useState([])
    const [searchString, setSearchString]  = useState("")



    const API_URL = "http://www.omdbapi.com?apikey=5b719ead"

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    } 
    
    useEffect(() => {
      searchMovies("Superman")
    }, [])
    
    
    return(
        <div className="app">
            <h1>Movie Universe</h1>

            <div className="search">
                <input
                value = {searchString}
                onChange={(e) => {setSearchString(e.target.value)}}
                placeholder="Search for movies"
                />
                <img 
                src={searchIcon} 
                alt = "Search icon"
                onClick={() => {searchMovies(searchString)}}
                />
            </div>

            {
                movies?.length > 0 ? 
                (<div className="container"> 
                     {
                        movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))
                     }
                </div> ):
                (
                    <div className="empty">
                        <h2>No Movie Found</h2>
                    </div>
                )

            }

        </div>
    )
}

export default App