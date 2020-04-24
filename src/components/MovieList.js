import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import Poster from "./Poster";
const MovieList = props => {
  return (
    <>
      <Row>
        {props.movies &&
          props.movies.map(movie => {
            return (
              <Col key={movie.id} span={6}>
                <Poster
                  poster={movie.poster_path}
                  title={movie.original_title}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default MovieList;
