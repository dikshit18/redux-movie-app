import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../store/actions";

import MovieSearch from "../components/MovieSearch";
class Movies extends Component {
  render() {
    return (
      <>
        <MovieSearch />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(Movies);
