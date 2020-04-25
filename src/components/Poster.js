/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import constants from "../utils/constants";
import styled from "styled-components";
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
const poster = props => {
  return (
    <>
      <Container>
        <img
          className="poster"
          style={{
            maxWidth: "100%",
            maxHeight: "100%"
          }}
          src={`${constants.movieBaner}${props.poster}`}
        />
        <Info className="title">{props.title}</Info>
      </Container>
    </>
  );
};

export default poster;
