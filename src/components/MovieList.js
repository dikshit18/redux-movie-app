import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import Poster from "./Poster";
import { Link } from "react-router-dom";
const movieList = props => {
  return (
    <>
      <Row>
        {props.movies &&
          props.movies.map(movie => {
            return (
              <Col key={movie.id} span={6}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      movie
                    }
                  }}
                >
                  <Poster
                    poster={movie.poster_path}
                    title={movie.original_title}
                  />
                </Link>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default movieList;
