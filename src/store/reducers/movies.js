import * as ACTIONS from "../actions/actionTypes";
const initialState = {
  moviesData: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_MOVIES_SUCCESS:
      console.log(action.moviesData.results);

      return { ...state, moviesData: action.moviesData.results };
    default:
      return { ...state };
  }
};
