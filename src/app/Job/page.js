import React from "react";
import JobNavBar from "@/component/JobPortal/JobNavbar";
import JobHero from "@/component/JobPortal/JobHero";
import DreamJob from "@/component/JobPortal/DreamJob";
import GoodCompany from "@/component/JobPortal/GoodCompany";
import CompanyPage from "@/component/JobPortal/CompanyPage";
import Carousel from "@/component/JobPortal/Crousel";

const page = () => {
  return (
    <div>
      <div>
        <JobNavBar />
      </div>
      <div>
        <JobHero />
      </div>
      <div>
        <DreamJob />
      </div>
      <div>
        <GoodCompany />
      </div>
      <div>
        <CompanyPage />
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default page;
