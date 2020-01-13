import React, { Fragment } from "react";
import Layout from "./Layout";
import HomeImg from "./HomeImg";
const Home = () => {
  return (
    <Fragment>
      <Layout
        title="Home Page"
        description="Node React App"
        className="container fluid"
      >
        <HomeImg />
      </Layout>
    </Fragment>
  );
};

export default Home;
