import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col">
        <Header />
        <Banner />
      </div>
    </div>
  );
};

export default Home;

