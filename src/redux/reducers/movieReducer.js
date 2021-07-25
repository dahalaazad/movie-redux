import { Actiontypes } from "../constants/action-types";

const initialState = [
    {title:'Spider-Man:HomeComing',releaseDate:'05-07-2017',rating: 7.4},
    {title:'Aquaman',releaseDate:'12-07-2018',rating: 7.0},
    {title:'Black Panther',releaseDate:'02-03-2018',rating: 7.4},
    {title:'Avengers: Infinity War',releaseDate:'04-25-2018',rating: 8.3},
    {title:'Guardians of the Galaxy',releaseDate:'07-30-2014',rating: 7.9}
];

export const moviesReducer = (state=initialState,action) => {
    return state;
}

export const movieSelectedReducer  = (state=null,action) => {
   switch (action.type) {
       case Actiontypes.MOVIE_SELECTED:
           return action.payload;
   
       default:
           return state;
   };
};

