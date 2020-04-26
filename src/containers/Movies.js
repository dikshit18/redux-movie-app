import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies, searchMovies } from "../store/actions";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1
    };
    props.onFetchMovies(this.state.pageNumber);
    this.scrollListener = window.addEventListener("scroll", e => {
      this.trackScrolling();
    });
  }

  //Known issue of Memory Leak, to be corrected
  componentWillUnmount() {
    console.log("I am here");
    // window.removeEventListener("scroll", this.scrollListener, e =>
    //   console.log("----", e)
    // );
  }
  trackScrolling() {
    const element = document.getElementById("root");
    if (element.getBoundingClientRect().bottom <= window.innerHeight) {
      let pageNumber = this.state.pageNumber;
      pageNumber++;
      console.log(pageNumber);
      this.setState({ pageNumber }, () => this.props.onFetchMovies(pageNumber));
    }
  }

  render() {
    return (
      <>
        <MovieSearch
          search={searchText => this.props.onMoviesSearch(searchText)}
        />
        <div
          style={{
            position: "relative",
            top: "6.5rem"
          }}
        >
          <MovieList
            movies={
              this.props.searchText && this.props.searchText !== ""
                ? this.props.searchedMovies
                : this.props.moviesData
            }
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesData: state.movies.moviesData,
    searchText: state.movies.searchText,
    searchedMovies: state.movies.searchedMovies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: pageNumber => dispatch(fetchMovies(pageNumber)),
    onMoviesSearch: searchText => dispatch(searchMovies(searchText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
