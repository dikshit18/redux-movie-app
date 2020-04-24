/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import endpoints from "../utils/endpoints";
import styled from "styled-components";

const Poster = props => {
  const Container = styled.div`
    position: "relative";
    text-align: center;
    color: white;
    &:hover .poster {
      -webkit-filter: brightness(50%);
      transition: all 0.5s ease;
    }
    &:hover .title {
      display: block;
    }
  `;
  const Info = styled.div`
    position: absolute;
    bottom: 3rem;
    left: 1rem;
    font-size: 3vw;
    display: none;
    font-weight: bold;
  `;

  return (
    <>
      <Container>
        <img
          className="poster"
          style={{
            maxWidth: "100%",
            maxHeight: "100%"
          }}
          src={`${endpoints.movieBaner}${props.poster}`}
        />
        <Info className="title">{props.title}</Info>
      </Container>
    </>
  );
};

export default Poster;
