"use client";

import React, { useState } from "react";
import Link from "next/link";


const JobDescription = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [sendEmailNotifications, setSendEmailNotifications] = useState(false);
  const [jobDescription, setJobDescription] = useState("");



  
 

  const benefits = [
    "Health insurance",
    "Provident Fund",
    "Cell phone reimbursement",
    "Health insurance",
    "Health insurance",
    "Health insurance",
    "Health insurance",
  ];

  

  return (
    <>
      <div className="w-full h-auto bg-white mt-16" id="job-description">
        <div className="flex flex-col gap-8 p-6 max-w-[68rem] mx-auto">
          {/* Communication Preferences Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Communication preferences</h2>

            <div>
              <label className="block font-medium text-sm mb-1">
                Get application updates <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                value={emailAddress}
                placeholder="Enter your email address"
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              className="text-sm text-red-600 font-medium hover:underline text-left"
              onClick={() => console.log("Add email clicked")}
            >
              + Add email
            </button>

            <label className="flex items-center space-x-2 text-gray-600 text-sm">
              <input
                type="checkbox"
                id="email-updates"
                checked={sendEmailNotifications}
                onChange={() =>
                  setSendEmailNotifications(!sendEmailNotifications)
                }
                className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <span>Send me an email each time someone applies</span>
            </label>
          </div>

          {/* Job Description Section */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-lg">
              Job description <span className="text-red-600">*</span>
            </label>
            <div className="border rounded-md overflow-hidden">
              <div className="bg-gray-100 px-2 py-1 border-b flex gap-2 text-sm">
                <button className="font-bold px-2 hover:bg-gray-200 rounded">
                  B
                </button>
                <button className="italic px-2 hover:bg-gray-200 rounded">
                  I
                </button>
                <button className="underline px-2 hover:bg-gray-200 rounded">
                  U
                </button>
                <button className="line-through px-2 hover:bg-gray-200 rounded">
                  S
                </button>
                <div className="border-l mx-2"></div>
                <button className="px-2 hover:bg-gray-200 rounded">
                  • List
                </button>
              </div>
              <textarea
                className="w-full p-3 h-48 resize-none outline-none"
                placeholder="Write the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Benefits</h2>
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="border border-gray-400 rounded-full px-4 py-1 text-sm flex items-center gap-2"
                >
                  <span className="text-lg leading-none">+</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <button className="text-sm text-red-600 font-medium hover:underline text-left">
              Show 6 more <span className="text-lg">▾</span>
            </button>
          </div>


               {/* Navigation Buttons */}
        <div className="w-full md:w-full mx-auto mt-8 mb-4 ">
          <div className="flex flex-col items-center justify-between w-full p-4 gap-4">
            <div className="flex w-full items-center justify-between gap-[30rem]">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors"
                onClick={() => console.log('Back clicked')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back
              </button>

              <div className="flex items-center gap-3">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => console.log('Preview clicked')}
                >
                  Preview
                </button>

                <Link href='#job-pay'>
                <button 
                  className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center gap-2 hover:bg-red-700 transition-colors"
                  
                >
                  Continue 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                </Link>
              </div>
            </div>

            <p className="text-sm text-gray-800">
              Have feedback? <span className="text-red-600 cursor-pointer hover:underline">Tell us more</span>
            </p>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default JobDescription;
