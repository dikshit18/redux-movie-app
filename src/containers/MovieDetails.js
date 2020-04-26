import React, { Component } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import Trailer from "../components/Trailer";
import { HeartTwoTone } from "@ant-design/icons";

import { Layout, PageHeader, Tag, Typography, Row, Col } from "antd";
import constants from "../utils/constants";
import { fetchTrailerURL } from "../store/actions";

const { Paragraph } = Typography;
class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.props.onFetchTrailer(this.props.location.state.movie.id);
  }

  render() {
    const {
      title,
      overview,
      adult,
      poster_path,
      vote_count
    } = this.props.location.state.movie;
    return (
      <>
        <Layout style={{ width: "85%", margin: "auto" }}>
          <PageHeader
            title={title}
            className="site-page-header"
            tags={<Tag color="blue">{adult ? "A" : "UA"}</Tag>}
          >
            <Row>
              <Col span={14} sm={24} xs={24} lg={14} md={14}>
                <Paragraph>{overview}</Paragraph>
                <HeartTwoTone
                  twoToneColor="#eb2f96"
                  style={{ paddingRight: "0.5rem" }}
                />
                {vote_count}
                <hr />
                <br />
                <Row>
                  <Col span={20} sm={24} xs={24} lg={20} md={20}>
                    <Trailer url={this.props.trailerURL} />
                  </Col>
                </Row>
              </Col>
              <Col span={10} sm={0} xs={0} lg={10} md={10}>
                <img
                  src={`${constants.movieBaner}${poster_path}`}
                  alt="content"
                  width="100%"
                  style={{ paddingLeft: "1rem", borderRadius: "0.5rem" }}
                />
              </Col>
            </Row>
          </PageHeader>
        </Layout>
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log("trailerURL", state.details.trailerURL);

  return {
    trailerURL: state.details.trailerURL
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchTrailer: movieId => dispatch(fetchTrailerURL(movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
