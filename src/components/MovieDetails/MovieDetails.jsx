import React from 'react'
import { connect } from 'react-redux';
import './MovieDetails.css';
//import { selectMovie } from "../actions/index";

const MovieDetails = (props) => {
    // <div><h2>Movie List</h2></div>
    if (!props.selectedMovie) {
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
                    <p>Title: {props.selectedMovie.title} </p>
                    <p>Release Date: {props.selectedMovie.releaseDate}</p>
                    <p>IMDB Rating: {props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
  };
  
  
  
  export default connect(mapStateToProps)(MovieDetails);
