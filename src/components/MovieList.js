import React from "react";
import "antd/dist/antd.css";
import endpoints from "../utils/endpoints";
import "./MovieList.css";
import { Row, Col } from "antd";
const MovieList = props => {
  return (
    <>
      <Row>
        {props.movies &&
          props.movies.map(movie => {
            return (
              <Col key={movie.id} span={6}>
                <img
                  className={"baner"}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  src={`${endpoints.movieBaner}${movie.poster_path}`}
                />
              </Col>
            );
          })}
      </Row>
      {/* <Col span={6}>1 col-order-4</Col>
      <Col span={6}>2 col-order-3</Col>
      <Col span={6}>3 col-order-2</Col>
      <Col span={6}>4 col-order-1</Col> */}
    </>
  );
};

export default MovieList;
