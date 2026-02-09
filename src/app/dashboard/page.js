import JobPortalDashboard from "@/component/Jobportal/Dashboard/Admin";
import Jobdata from "@/component/Jobportal/Dashboard/Jobdata";
import JobForm from "@/component/Jobportal/Dashboard/Jobform";
import JobListings from "@/component/Jobportal/Dashboard/Joblisting";
import JobReviewPage from "@/component/Jobportal/Dashboard/Jobreview";
import Payment from "@/component/Jobportal/Dashboard/Payment";
import User from "@/component/Jobportal/Dashboard/User";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <JobPortalDashboard />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <User />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <JobListings />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <JobReviewPage />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <JobForm />
      </div>
      <div className="bg-gray-100 p-2"></div>
      <div>
        <Jobdata />
      </div>
      <div>
        <Payment />
      </div>
    </div>
  );
};

export default page;
