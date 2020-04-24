import * as ACTIONS from "../actions/actionTypes";
const initialState = {
  moviesData: [],
  searchText: null,
  searchedMovies: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_MOVIES_SUCCESS:
      return { ...state, moviesData: action.moviesData.results };
    case ACTIONS.SEARCH_MOVIES:
      const updatedMovies = state.moviesData.filter(element =>
        element.original_title.includes(action.searchText)
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
