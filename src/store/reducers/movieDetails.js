import * as ACTIONS from "../actions/actionTypes";
const initialState = {
  trailerURL: null
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_TRAILER_SUCCESS:
      return { ...state, trailerURL: action.trailerURL };
    case ACTIONS.FETCH_TRAILER_FAILURE:
      return {
        ...state
      };
    default:
      return { ...state };
  }
};
