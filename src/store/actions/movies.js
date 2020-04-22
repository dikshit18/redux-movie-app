import * as ACTIONS from "./actionTypes";
import axiosInstance from "../../utils/axios";

export const fetchMoviesFailure = error => {
  return {
    type: ACTIONS.FETCH_MOVIES_FAILURE,
    error
  };
};
export const fetchMoviesSuccess = data => {
  return {
    type: ACTIONS.FETCH_MOVIES_SUCCESS,
    data
  };
};

export const fetchMovies = () => {
  const moviesData = axiosInstance.getRequest(url);
  return {
    type: ACTIONS.FETCH_MOVIES
  };
};
