import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
// import BlogList from "../components/BlogList";
import AboutUs from "../components/AboutUs";
import CurrentSituation from "../components/CurrentSituation";
import Footer from "../components/Footer";
import DuraSection from "../components/DuraSection";
import FeatureCards from "../components/FeatureCards";
import CompetitiveAdvantage from "../components/CompetitiveAdvantage";
import HealthBenefits from "../components/HealthBenefits";
import StepsSection from "../components/StepsSection";
import InnovationSection from "../components/InnovationSection";
import MilestoneSection from "../components/MilestoneSection";
import SuccessStory from "../components/SuccessStory";
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";


const HomePage = () => {
  return (
    <>
      <Navbar />
      
      <HomeSection />
       <AboutUs />
       <CurrentSituation/>
       <DuraSection/>
       <FeatureCards/>
       <HealthBenefits/>
      <CompetitiveAdvantage/>
      <StepsSection/>
      <InnovationSection/>
      <MilestoneSection/>
      <SuccessStory/>
      <TeamSection/>
      <Testimonials/>
      <CallToAction/>
      
      
      {/* <BlogList /> */}
      <Footer/>
    </>
  );
};

export default HomePage;
