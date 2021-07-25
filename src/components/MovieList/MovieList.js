import React from "react";
import './MovieList.css';
import { useSelector, useDispatch } from "react-redux";
import { selectMovie } from "../../redux/actions/movieActions";


function MovieList (){

  const movie = useSelector(state => state.movies);
  console.log(movie);
    const dispatch = useDispatch();
    //console.log(movie);
    // <div><h2>Movie List</h2></div>
    const listItems = movie.map((movies) => {
        return(
          <div key={movies.title} >
            <span>{movies.title}</span>
            <button onClick={() =>dispatch(selectMovie(movies))}>details</button>
          </div>
         );
    })
    return(
      <div className="list-container">
        <h2>Movie List</h2>
        <ul>
          {listItems}
        </ul>
      </div>
    )
}



export default MovieList;




