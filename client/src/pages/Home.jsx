import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Success from "../components/Success";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <div>

      <Header/>

      <Banner/>

      <Categories />

      <Success />

      <Courses />
    </div>
  );
};

export default Home;

