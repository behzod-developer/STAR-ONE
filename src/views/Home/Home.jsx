import React from "react";
import "./Home.css";
import Header from "../../component/header/Header";
import OneID from "./OneID/OneID";
import Section_2 from "./section_2/Section_2";
import Section_3 from "./section_3/Section_3";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Header />
      </div>
      <OneID />
      <Section_2 />
      <Section_3 />
    </div>
  );
}

export default Home;
