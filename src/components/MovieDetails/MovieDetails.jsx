import React from 'react'
import './MovieDetails.css';
import { useSelector } from "react-redux";
//import { selectMovie } from '../../redux/actions/movieActions';



function MovieDetails () {
    const movie = useSelector((state) => state.selectedMovie);
    console.log(movie);
    //const dispatch = useDispatch();
    // <div><h2>Movie List</h2></div>
    if (!movie) {
     return (
        <div className="details-container" style={{width: '70%'}}>
            <h2>Movie</h2>
            <div className="properties">
                <p>Select Movie</p>
            </div>
        </div>
      );
    }
    else {
        return (
            <div className="details-container" >
                <h2>Movie</h2>
                <div className="properties">
                    <p>Title: {movie.title} </p>
                    <p>Release Date: {movie.releaseDate}</p>
                    <p>IMDB Rating: {movie.rating}</p>
                </div>
            </div>
        )
    }
} 

export default MovieDetails;
  
  
  