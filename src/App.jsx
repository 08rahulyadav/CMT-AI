import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import BlogSection from "./components/BlogSection";


function App() {
  return (
    <div className="font-sans">
     <Navbar/>
     <HomeSection/>
      <BlogSection />
    </div>
  );
}

export default App;
