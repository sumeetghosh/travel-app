import React, { Fragment } from "react";
import "../App.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </Fragment>
  );
}

export default Home;
