"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/component/ui/card";
import Link from "next/link";

const JobDetails = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [resumeRequired, setResumeRequired] = useState(false);
  const [allowEmailContact, setAllowEmailContact] = useState(false);
  const [hasDeadline, setHasDeadline] = useState(false);
  const [deadlineDate, setDeadlineDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="w-full h-auto bg-white" >
        <Card className="w-8/12 mx-auto p-6 mt-20 bg-white shadow-md rounded-lg">
          <CardContent className="space-y-6">
            <h2 className="text-lg font-semibold">Job details</h2>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">Job title</div>
              <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-1/2 text-sm border rounded p-2"
                placeholder="Enter job title"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">Company for this job</div>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-1/2 text-sm border rounded p-2"
                placeholder="Enter company name"
              />
            </div>
          </CardContent>
        </Card>

        <div className="pt-8 w-8/12 mx-auto p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-base font-semibold mb-6">
            Application preferences
          </h3>

          <div className="flex items-start space-x-3 mb-4">
            <input
              type="checkbox"
              id="resumeRequired"
              checked={resumeRequired}
              onChange={() => setResumeRequired(!resumeRequired)}
              className="mt-1"
            />
            <label htmlFor="resumeRequired" className="text-sm text-gray-700">
              Resume is required
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="allowEmailContact"
              checked={allowEmailContact}
              onChange={() => setAllowEmailContact(!allowEmailContact)}
              className="mt-1"
            />
            <label
              htmlFor="allowEmailContact"
              className="text-sm text-gray-700"
            >
              Let potential candidates contact you about this job by email to
              the address provided.
            </label>
          </div>
        </div>

        <div className="mt-16 md:mt-28 w-full bg-white rounded-lg">
          <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto p-4 md:p-6">
            <p className="text-base md:text-lg font-medium mb-4 md:mb-6 text-center md:text-left pl-[13px]">
              Is there an application deadline?
            </p>

            <div className="space-y-3 p-4 md:p-6 bg-white shadow-md rounded-lg">
              <label className="flex items-center p-2 md:p-3 border rounded-md bg-white cursor-pointer">
                <input
                  type="radio"
                  name="deadline"
                  checked={!hasDeadline}
                  onChange={() => setHasDeadline(false)}
                  className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                />
                <span className="ml-2 text-sm md:text-base">No</span>
              </label>

              <label className="flex items-center p-2 md:p-3 border rounded-md bg-white cursor-pointer">
                <input
                  type="radio"
                  name="deadline"
                  checked={hasDeadline}
                  onChange={() => setHasDeadline(true)}
                  className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                />
                <span className="ml-2 text-sm md:text-base">Yes</span>
              </label>

              {hasDeadline && (
                <div className="mt-2 p-2 md:p-3 border rounded-md bg-white">
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Select deadline date
                  </label>
                  <select
                    value={deadlineDate}
                    onChange={(e) => setDeadlineDate(e.target.value)}
                    className="mt-1 block w-full px-2 py-1 md:pl-3 md:pr-10 md:py-2 text-sm md:text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 rounded-md"
                  >
                    <option value="" disabled>
                      Select a date
                    </option>
                    <option value="1week">1 week from now</option>
                    <option value="2weeks">2 weeks from now</option>
                    <option value="1month">1 month from now</option>
                    <option value="3months">3 months from now</option>
                    <option value="custom">Custom date</option>
                  </select>

                  {deadlineDate === "custom" && (
                    <input
                      type="date"
                      className="mt-2 block w-full px-2 py-1 md:pl-3 md:pr-10 md:py-2 text-sm md:text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 rounded-md"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-8/12 mx-auto mt-8 mb-4">
          <div className="flex flex-col items-center justify-between w-full p-4 gap-4">
            <div className="flex w-full items-center justify-between">
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
                <Link href='#job-description'>
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

      <div id="job-description" className="w-full h-auto bg-white py-8">
        <Card className="w-8/12 mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
          <CardContent className="space-y-6">
            <h2 className="text-lg font-semibold">Job Description</h2>
            
            <div className="space-y-4">
              <label className="block text-sm text-gray-700">
                Describe the responsibilities, requirements, and benefits
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full h-48 p-3 text-sm border rounded"
                placeholder="Provide details about the job role, responsibilities, and requirements..."
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm text-gray-700">Skills required</label>
              <div className="flex gap-2 flex-wrap">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                    <span className="text-sm">{skill}</span>
                    <button 
                      onClick={() => handleRemoveSkill(index)}
                      className="ml-2 text-gray-500 hover:text-red-600"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="flex-1 text-sm border rounded p-2"
                  placeholder="Add a skill"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                />
                <button 
                  onClick={handleAddSkill}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Add
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="w-full md:w-8/12 mx-auto mt-8 mb-4">
          <div className="flex flex-col items-center justify-between w-full p-4 gap-4">
            <div className="flex w-full items-center justify-between">
              <Link href="#job-details">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Back
                </button>
              </Link>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;