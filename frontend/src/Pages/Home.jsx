import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SmartIntegration from "../components/SmartIntegration";
import Insights from "../components/Insights";
import Coaching from "../components/Coaching";
import Reminders from "../components/Reminders";
import Progress from "../components/Progress";
import Community from "../components/Community";
import Wellness from "../components/Wellness";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <SmartIntegration />
      <Insights />
      <Coaching />
      <Reminders />
      <Progress />
      <Community />
      <Wellness />
      <Footer />
    </>
  );
};

export default Home;
