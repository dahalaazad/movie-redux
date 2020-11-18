import { combineReducers } from 'redux'

//import { createAction,createReducer } from "@reduxjs/toolkit";
//import { combineReducers } from 'redux';

//ACTION CREATORS

//export const selectMovie = createAction('MOVIE_SELECTED');

//REDUCERS
// const moviesReducer = createReducer([], {
//     selectMovie: (movies,action) => {
//         movies.push([
//             {title:'Spider-Man:HomeComing',releaseDate:'05-07-2017',rating: 7.4},
//             {title:'Aquaman',releaseDate:'05-07-2017',rating: 7.4},
//             {title:'Black Panther',releaseDate:'05-07-2017',rating: 7.4},
//             {title:'Avengers: Infinity War',releaseDate:'05-07-2017',rating: 7.4},
//             {title:'Guardians of the Galaxy',releaseDate:'05-07-2017',rating: 7.4}
//         ])
//     }
// })

const moviesReducer = () => {
    return [
        {title:'Spider-Man:HomeComing',releaseDate:'05-07-2017',rating: 7.4},
        {title:'Aquaman',releaseDate:'12-07-2018',rating: 7.0},
        {title:'Black Panther',releaseDate:'02-03-2018',rating: 7.4},
        {title:'Avengers: Infinity War',releaseDate:'04-25-2018',rating: 8.3},
        {title:'Guardians of the Galaxy',releaseDate:'07-30-2014',rating: 7.9}
    ]
};

// const selectedMovieReducer = createReducer([],{
//     selectMovie: (movies,action) => {
//         return action.payload
//     }
// })

const selectedMovieReducer = (state=null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload;
        default:
            return state;
    }
};
// const rootReducer = combineReducers({
//     movies: moviesReducer,
//     selectMovie: selectedMovieReducer
// });

// export default rootReducer; 

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
});
