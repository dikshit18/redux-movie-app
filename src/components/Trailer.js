import React from "react";
import ReactPlayer from "react-player";

const trailer = props => {
  const url = `https://www.youtube.com/watch?v=${props.url}`;
  return (
    <ReactPlayer url={url} playing={false} width={"100%"} controls={true} />
  );
};
export default trailer;
