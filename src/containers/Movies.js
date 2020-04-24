import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies, searchMovies } from "../store/actions";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";
class Movies extends Component {
  constructor(props) {
    super(props);
    props.onFetchMovies();
  }

  render() {
    return (
      <>
        <MovieSearch
          search={searchText => this.props.onMoviesSearch(searchText)}
        />
        <div style={{ position: "relative", top: "6.5rem" }}>
          <MovieList
            movies={
              this.props.searchText
                ? this.props.searchMovies
                : this.props.moviesData
            }
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    moviesData: state.moviesData,
    searchText: state.searchText,
    searchedMovies: state.searchedMovies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: () => dispatch(fetchMovies()),
    onMoviesSearch: searchText => dispatch(searchMovies(searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
