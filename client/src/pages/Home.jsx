import React from "react";
import Header from "../components/Header";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${assets.bannerbg})`, backgroundSize: "cover", backgroundPosition: "center",minHeight: "100vh",}}>
        <Header />
      </div>
    </div>
  );
};

export default Home;
