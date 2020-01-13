import React from "react";
import Menu from "./Menu";
import "../style.css";
import Footer from "./Footer";

const Layout = ({
  title = "Title",
  description = "Description",
  children,
  className
}) => (
  <div>
    <Menu />
    <div className="jumbotron">
      <h2>{title}</h2>
      <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
