import * as ACTIONS from "./actionTypes";
import axios from "../../utils/axios";
import endpoints from "../../utils/endpoints";

export const fetchMoviesFailure = error => {
  return {
    type: ACTIONS.FETCH_MOVIES_FAILURE,
    error
  };
};
export const fetchMoviesSuccess = moviesData => {
  return {
    type: ACTIONS.FETCH_MOVIES_SUCCESS,
    moviesData
  };
};

export const fetchMovies = () => {
  return dispatch => {
    axios
      .get(endpoints.movieList)
      .then(response => dispatch(fetchMoviesSuccess(response.data)))
      .catch(error => dispatch(fetchMoviesFailure(error.response)));
  };
};
