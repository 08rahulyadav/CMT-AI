import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import BlogList from "../components/BlogList";

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      <HomeSection />
      
      <BlogList />
    </>
  );
};

export default HomePage;
