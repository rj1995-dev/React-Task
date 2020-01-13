import React from "react";
import Layout from "./Layout";

const AboutUs = () => {
  return (
    <Layout
      title="About Us Page"
      description="That is our company about page"
      className="container col-md-5 offset-md-3"
    >
      <h3>App using React and Node</h3>
      <h4>App Version 1.0.0</h4>
    </Layout>
  );
};

export default AboutUs;
