import React from "react";
import JobNavBar from "@/component/Jobportal/JobNavbar";
import JobHero from "@/component/Jobportal/JobHero";
import DreamJob from "@/component/Jobportal/DreamJob";
import GoodCompany from "@/component/Jobportal/GoodCompany";
import CompanyPage from "@/component/Jobportal/CompanyPage";
import Carousel from "@/component/Jobportal/Crousel";

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
