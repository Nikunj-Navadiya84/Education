import React, { useRef } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Success from "../components/Success";
import Courses from "../components/Courses";
import Principles from "../components/Principles";
import Counter from "../components/Counter";
import Student from "../components/Student";
import Questions from "../components/Questions";
import Asked from "../components/Asked";
import Footer from "../components/Footer";

const Home = () => {
  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const coursesRef = useRef(null);
  const principlesRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header
        onHomeClick={() => scrollToRef(homeRef)}
        onCategoriesClick={() => scrollToRef(categoriesRef)}
        onCoursesClick={() => scrollToRef(coursesRef)}
        onPrinciplesClick={() => scrollToRef(principlesRef)}
        onFooterClick={() => scrollToRef(footerRef)}
      />

      <div ref={homeRef}>
        <Banner />
      </div>


      <Categories />


      <div ref={categoriesRef}>
        <Success />
      </div>

      <div ref={coursesRef}>
        <Courses />
      </div>

      <div ref={principlesRef}>
      <Principles/>
      </div>

      <Counter />

      <Student />

      <Questions />

      <Asked />

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
