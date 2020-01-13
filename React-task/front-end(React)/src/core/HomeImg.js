import React, { useState, useEffect } from "react";
import "../style.css";
import desktopImage from "../defaultBcg.jpeg";
import mobileImage from "../defaultBcg.jpeg";
import { Link } from "react-router-dom";
const HomeImg = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imageUrl})`,
        // width: "100%",

        textAlign: "center"
      }}
    >
      <Link
        to="/user/dashboard"
        className="main-link"
        style={{ margin: "200px" }}
      >
        go to dasboard
      </Link>
    </div>
  );
};

export default HomeImg;
