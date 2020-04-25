import * as ACTIONS from "../actions/actionTypes";
const initialState = {
  moviesData: [],
  searchText: null,
  searchedMovies: []
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    //Negative cases left to handle now
    case ACTIONS.FETCH_MOVIES_SUCCESS:
      const moviesData = state.moviesData.concat(action.moviesData.results);
      return { ...state, moviesData };
    case ACTIONS.SEARCH_MOVIES:
      const updatedMovies = state.moviesData.filter(element =>
        element.title.toLowerCase().includes(action.searchText.toLowerCase())
      );
      return {
        ...state,
        searchText: action.searchText,
        searchedMovies: updatedMovies
      };
    default:
      return { ...state };
  }
};
