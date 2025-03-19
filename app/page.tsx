"use client";

import Home from "./_Component/Home";
import About from "./_Component/About";
import Show from "./_Component/Show";
import Courses from "./_Component/Courses";
import WhyChoose from "./_Component/WhyChoose";

const page = () => {
  return (
    <>
      <Home />
      <Show />
      <About />
      <Courses />
      <WhyChoose />
    </>
  );
};

export default page;
