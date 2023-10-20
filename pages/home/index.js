import React from "react";
import SuperiorTechnologySolution from "../../components/Home/SuperiorTechnologySolution";
import WeOfferBestServices from "../../components/Home/WeOfferBestServices";
import OurWorkingProcess from "../../components/Home/OurWorkingProcess";
import CreativeAgency from "../../components/Home/CreativeAgency";
import SellingProducts from "../../components/Home/SellingProducts";
import Testimonials from "../../components/Home/Testimonials";
import GetInTouch from "../../components/Home/GetInTouch";
import LatestBlogs from "../../components/Home/LastestBlogs";

const HomePage = () => {
  return (
    <>
      <SuperiorTechnologySolution/>
      <WeOfferBestServices/>
      <OurWorkingProcess/>
      <CreativeAgency/>
      <SellingProducts/>
      <Testimonials/>
      <GetInTouch/>
      <LatestBlogs title="lastest blogs"/>
    </>
  )
}

export default HomePage;