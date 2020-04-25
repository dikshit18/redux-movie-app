import * as ACTIONS from "./actionTypes";
import axios from "../../utils/axios";
import constants from "../../utils/constants";

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

export const fetchMovies = pageNumber => {
  return dispatch => {
    axios
      .get(constants.movieList + pageNumber)
      .then(response => dispatch(fetchMoviesSuccess(response.data)))
      .catch(error => dispatch(fetchMoviesFailure(error.response)));
  };
};

export const searchMovies = searchText => {
  return {
    type: ACTIONS.SEARCH_MOVIES,
    searchText
  };
};
