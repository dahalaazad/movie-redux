import { Actiontypes } from "../constants/action-types";

export const selectMovie = (movie) => {
    return {
        type: Actiontypes.MOVIE_SELECTED,
        payload:movie
    };
};