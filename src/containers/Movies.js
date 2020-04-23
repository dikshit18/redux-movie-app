import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../store/actions";
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
        <MovieSearch />
        <div style={{ position: "relative", top: "6.5rem" }}>
          <MovieList movies={this.props.moviesData} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    moviesData: state.moviesData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
