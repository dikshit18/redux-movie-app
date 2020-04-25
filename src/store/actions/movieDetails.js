import * as ACTIONS from "./actionTypes";
import axios from "../../utils/axios";
import constants from "../../utils/constants";

export const fetchTrailerFailure = error => {
  return {
    type: ACTIONS.FETCH_TRAILER_FAILURE,
    error
  };
};
export const fetchTrailerSuccess = trailerURL => {
  return {
    type: ACTIONS.FETCH_TRAILER_SUCCESS,
    trailerURL
  };
};

export const fetchTrailerURL = movieId => {
  return dispatch => {
    axios
      .get(
        `${constants.trailerList}${movieId}/videos?api_key=${constants.apiKey}`
      )
      .then(response =>
        dispatch(fetchTrailerSuccess(response.data.results[0].key))
      )
      .catch(error => dispatch(fetchTrailerSuccess(error.response)));
  };
};
