import React from "react";
import HomeHero from "../components/HomeHero";
import HomeStatistics from "../components/HomeStatistics";
import HomeTopCategories from "../components/HomeTopCategory";
import HomeTopCourses from "../components/HomeTopCourses";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeStatistics />
      <HomeTopCategories/>
      <HomeTopCourses/>
    </>
  );
};

export default HomePage;