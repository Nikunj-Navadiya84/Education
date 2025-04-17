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
import { IoIosArrowUp } from "react-icons/io";

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
        <Principles />
      </div>

      <Counter />
      <Student />
      <Questions />
      <Asked />

      <div ref={footerRef}>
        <Footer />
      </div>

      {/* Scroll Buttons */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center justify-center bg-gray-600 text-white w-10 h-10 rounded-full shadow hover:bg-gray-800 transition" ><IoIosArrowUp className="text-2xl"/></button>
      </div>
    </div>
  );
};

export default Home;
