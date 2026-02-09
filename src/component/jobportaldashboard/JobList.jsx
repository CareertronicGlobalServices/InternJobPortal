"use client";
import React, { useState, useRef } from 'react';
import { Star, Briefcase, MapPin, FileText, Bookmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { jobs } from "@/lib/config";

const ITEMS_PER_PAGE = 5;

const JobCard = ({ role, company, rating, experience, salary, location, requirements, jobLevel, postedTime, companyLogo }) => {
  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow relative">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-4 flex-1">
            {/* Title and Company */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{role}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-600">{company}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                <span>{experience}</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                <span>${salary}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>

            {/* Requirements */}
            <div className="text-sm text-gray-600">
              <span className="font-medium">Good to have - </span>
              {requirements}
            </div>

            {/* Job Level */}
            <div className="flex flex-wrap gap-2">
              {jobLevel.map((level, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {level}
                </span>
              ))}
            </div>

            {/* Posted Time */}
            <div className="text-sm text-gray-500">
              {postedTime}
            </div>
          </div>

          {/* Company Logo */}
          <div className="ml-4">
            <img src={companyLogo} alt={company} className="w-16 h-16 rounded-lg object-cover" />
          </div>
        </div>

        {/* Bookmark Button */}
        <button className="absolute bottom-6 right-6">
          <Bookmark className="w-5 h-5 text-gray-400 hover:text-gray-600" />
        </button>
      </CardContent>
    </Card>
  );
};

const JobList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  
  const listRef = useRef(null);  // Ref to the scroll container

  // Calculate the current page's jobs
  const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (listRef.current) {
      window.scrollTo({
        top: listRef.current.offsetTop - 50,  
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto" ref={listRef}>
      <div className="space-y-4">
        {currentJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-8 py-4 rounded-full text-sm font-medium bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium 
                ${pageNum === currentPage 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-8 py-4 rounded-full text-sm font-medium bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobList;