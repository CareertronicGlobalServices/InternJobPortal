"use client";
import React from "react";
import FilterPanel from "@/component/jobportaldashboard/FilterPanel";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Filter Panel - 3 columns on desktop */}
          <div className="md:col-span-3">
            <FilterPanel />
          </div>

          {/* Main Content - 9 columns on desktop */}
          <div className="md:col-span-9">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="px-4 py-2 border rounded-md w-64"
                  />
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                    Search
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Sort by:</span>
                  <select className="px-3 py-2 border rounded-md">
                    <option value="relevance">Relevance</option>
                    <option value="date">Date Posted</option>
                    <option value="salary">Salary</option>
                  </select>
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                      <div>
                        <h2 className="text-lg font-semibold">
                          Senior Software Engineer
                        </h2>
                        <p className="text-gray-600">TechCorp Inc.</p>
                      </div>
                      <button className="mt-2 md:mt-0 px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-50">
                        Apply
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span>Mumbai</span>
                      <span>Full-time</span>
                      <span>₹15L - ₹25L</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-6 flex justify-center gap-2">
                <button className="px-3 py-1 border rounded hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-red-600 text-white rounded">
                  1
                </button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
