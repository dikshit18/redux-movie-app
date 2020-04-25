import React from "react";
import { Layout, Input, Row, Col } from "antd";
import "antd/dist/antd.css";
const { Header } = Layout;
const { Search } = Input;
const movieSearch = props => {
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            height: "6.5rem"
          }}
        >
          <Row>
            <Col md={8} lg={8} xs={24} sm={24}>
              <Search
                placeholder="Search a movie..."
                style={{ paddingTop: "1.5rem" }}
                onKeyUp={value => props.search(value.target.value)}
                enterButton
              />
            </Col>
          </Row>
        </Header>
      </Layout>
    </>
  );
};

export default movieSearch;
