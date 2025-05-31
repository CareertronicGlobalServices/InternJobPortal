"use client";

import React, { useState } from "react";

const JobPay = () => {
  const [minPay, setMinPay] = useState();
  const [maxPay, setMaxPay] = useState();
  const [rate, setRate] = useState("per month");
  const [payType, setPayType] = useState("Range");
  const [selectedPayOptions, setSelectedPayOptions] = useState([]);
  const [numToHire, setNumToHire] = useState("");
  const [recruitmentTimeline, setRecruitmentTimeline] = useState("");
  const [plannedStart, setPlannedStart] = useState("No");

  const supplementalPayOptions = [
    "Performance bonus",
    "Yearly bonus",
    "Commission pay",
    "Overtime pay",
    "Quarterly bonus",
    "Shift allowance",
    "Joining bonus",
    "Other",
  ];
  const sheduleOptions = [
    "Day shift",
    "Morning shift",
    "Rotational shift",
    "Night shift",
    "Monday to Friday",
    "Evening shift",
    "Weekend availability",
    "Fixed shift",
  ];

  const hireOptions = ["1", "2-5", "6-10", "11-20", "More than 20"];

  const timelineOptions = [
    "Immediately",
    "Within a week",
    "Within a month",
    "Flexible",
  ];

  const togglePayOption = (option) => {
    if (selectedPayOptions.includes(option)) {
      setSelectedPayOptions(
        selectedPayOptions.filter((item) => item !== option)
      );
    } else {
      setSelectedPayOptions([...selectedPayOptions, option]);
    }
  };

  return (
    <div className="max-w-[68rem] mx-auto p-6" id="job-pay">
      <h2 className="text-xl font-semibold mb-2">Pay</h2>
      <p className="text-sm text-gray-500 mb-4">
        Review the pay we estimated for your job and adjust it as needed. Check
        your local minimum wage.
      </p>

      {/* Card replacement */}
      <div className="  bg-white">
        <div className="p-4 space-y-4">
          {/* Show pay by select */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium w-28">Show pay by</label>
            <div className="relative w-40">
              <select
                className="w-full appearance-none border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-8"
                value={payType}
                onChange={(e) => setPayType(e.target.value)}
              >
                <option value="Range">Range</option>
                <option value="Fixed">Fixed</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Pay amount inputs */}
          <div className="flex items-center gap-8 flex-wrap">
            <div>
              <label className="text-sm block mb-1">Minimum</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">₹</span>
                </div>
                <input
                  type="number"
                  value={minPay}
                  onChange={(e) => setMinPay(parseFloat(e.target.value))}
                  className="pl-8 pr-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1">Maximum</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">₹</span>
                </div>
                <input
                  type="number"
                  value={maxPay}
                  onChange={(e) => setMaxPay(parseFloat(e.target.value))}
                  className="pl-8 pr-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1">Rate</label>
              <div className="relative w-32">
                <select
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full appearance-none border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-8"
                >
                  <option value="per hour">per hour</option>
                  <option value="per day">per day</option>
                  <option value="per week">per week</option>
                  <option value="per month">per month</option>
                  <option value="per year">per year</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supplemental Pay */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-8">Supplemental Pay</h3>
        <div className="flex flex-wrap gap-2">
          {supplementalPayOptions.map((option) => (
            <button
              key={option}
              onClick={() => togglePayOption(option)}
              className={`rounded-full text-lg py-2 px-4 border ${
                selectedPayOptions.includes(option)
                  ? "bg-red-50 border-red-300 text-red-600"
                  : "bg-white hover:bg-gray-50 border-gray-300"
              }`}
            >
              {selectedPayOptions.includes(option) ? "✓" : "+"} {option}
            </button>
          ))}
        </div>
      </div>

      {/* Sheduled time */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-8">Shedule</h3>
        <div className="flex flex-wrap gap-6 mb-[20px]">
          {sheduleOptions.map((option) => (
            <button
              key={option}
              onClick={() => togglePayOption(option)}
              className={`rounded-full text-lg py-1 px-3 border ${
                selectedPayOptions.includes(option)
                  ? "bg-red-50 border-red-300 text-red-600"
                  : "bg-white hover:bg-gray-50 border-gray-300"
              }`}
            >
              {selectedPayOptions.includes(option) ? "✓" : "+"} {option}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-lg font-medium block mb-4">
            Number of people you wish to hire for this job{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={numToHire}
              onChange={(e) => setNumToHire(e.target.value)}
              className="w-full appearance-none border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-8"
            >
              <option value="" disabled>
                Select an option
              </option>
              {hireOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="text-lg font-medium block mb-3">
            Recruitment timeline for this job{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={recruitmentTimeline}
              onChange={(e) => setRecruitmentTimeline(e.target.value)}
              className="w-full appearance-none border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-8"
            >
              <option value="" disabled>
                Select an option
              </option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>




      <div className="pt-4">
  <label className="text-lg font-medium block mb-3">
    Is there a planned start date for this job?
  </label>
  <div className="space-y-2">
    <div className="flex items-center space-x-2 border rounded-md px-4 py-2">
      <input
        type="radio"
        id="yes"
        name="plannedStartDate"
        value="Yes"
        checked={plannedStart === "Yes"}
        onChange={(e) => setPlannedStart(e.target.value)}
        className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
      />
      <label htmlFor="yes" className="text-sm">Yes</label>
    </div>
    <div className="flex items-center space-x-2 border rounded-md px-4 py-2">
      <input
        type="radio"
        id="no"
        name="plannedStartDate"
        value="No"
        checked={plannedStart === "No"}
        onChange={(e) => setPlannedStart(e.target.value)}
        className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
      />
      <label htmlFor="no" className="text-sm">No</label>
    </div>
  </div>
</div>          






      {/* Navigation buttons (similar to what you had before) */}
      <div className="w-full mt-8 mb-4">
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors"
            onClick={() => console.log("Back clicked")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <div className="flex items-center gap-3">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => console.log("Preview clicked")}
            >
              Preview
            </button>

            <button
              className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center gap-2 hover:bg-red-700 transition-colors"
              onClick={() => console.log("Continue clicked")}
            >
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPay;
