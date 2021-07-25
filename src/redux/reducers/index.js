import { combineReducers } from "redux";
import { movieSelectedReducer, moviesReducer } from "./movieReducer";

const reducers = combineReducers({
    movies: moviesReducer,
    selectedMovie: movieSelectedReducer,
});

export default reducers;