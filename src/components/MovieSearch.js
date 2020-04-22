import React from "react";
import { Layout, Input } from "antd";
import "antd/dist/antd.css";
const { Header } = Layout;
const { Search } = Input;
const movieSearch = props => {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Search
            placeholder="Search a movie..."
            style={{ height: "4rem", width: "40rem", paddingTop: "1.5rem" }}
            onSearch={value => console.log(value)}
            enterButton
          />
        </Header>
      </Layout>
    </>
  );
};

export default movieSearch;
