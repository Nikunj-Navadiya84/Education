import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <div className="bg-[#f5f9f1]">
        <Header />
        <Banner />
      </div>
      <Categories />
    </div>
  );
};

export default Home;

