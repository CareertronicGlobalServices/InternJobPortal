import React from "react";
import { Search, SeparatorVertical } from "lucide-react";
import { filters } from "@/lib/config";
import { ChevronDown } from "lucide-react";
import FilterPanel from "./FilterPanel";
import JobList from "./JobList";
import { Card, CardContent } from "../ui/card";
import ResumeBuilderCard from "./ResumeBuilderCard";
import Image from "next/image";
import { futuredCompanies } from "@/lib/config";
// import Pagination  from "./Pagination";
import JobPortalBottom from "./JobPortalBottom";
function JobSearch() {
  return (
    <>
      <div className="bg-[#EAEAEA] ">
        <div className="bg-[#EAEAEA]  px-5  h-auto md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col pb-7 pt-12 sm:pt-32 gap-6 sm:gap-20">
          <div className="flex flex-col justify-between items-center gap-3 sm:gap-10">
            <h2 className="text-black text-center font-extrabold font-poppins text-2xl sm:text-5xl">
              Find your dream job now
            </h2>
            <p className="text-black font-poppins text-lg sm:text-2xl font-normal">
              10 lakh jobs for you to explore
            </p>
          </div>

          <div className="w-full h-auto flex flex-row bg-white rounded-3xl justify-between lg:justify-around items-center px-4 py-3">
            <div className="flex justify-center items-center">
              <Search />
            </div>
            <div className="hidden lg:flex justify-evenly gap-6">
              <input
                placeholder="Enter your Skills"
                className="rounded-2xl placeholder-black placeholder:text-center placeholder:text-black placeholder:text-md placeholder:font-poppins placeholder:font-medium p-2"
              ></input>
              <div className="flex justify-center items-center">
                <SeparatorVertical />
              </div>
              <input
                placeholder="Select Experience"
                className="rounded-2xl placeholder-black placeholder:text-center placeholder:text-black placeholder:text-md placeholder:font-poppins placeholder:font-medium p-2"
              ></input>
              <div className="flex justify-center items-center">
                <SeparatorVertical />
              </div>
              <input
                placeholder="Enter Location"
                className="rounded-2xl placeholder-black placeholder:text-center placeholder:text-black placeholder:text-md placeholder:font-poppins placeholder:font-medium p-2"
              ></input>
            </div>
            <button className="text-md font-poppins font-medium border-2 border-black rounded-xl px-6 py-2 hover:bg-gray-300 transition-all">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#EAEAEA] from-80% to-slate-50 ">
        <div className="bg-gradient-to-b from-[#EAEAEA] from-80% to-slate-50 py-10 pt-7 px-5 h-auto md:max-w-7xl lg:max-w-[88rem] 2xl:max-w-[100rem] mx-auto flex flex-col gap-8">
          <div className="p-2 pb-7 flex flex-wrap gap-6 justify-center">
            {filters.map((element, idx) => {
              return (
                <div key={idx} className="relative">
                  <select
                    id="filters"
                    name="filters"
                    className="p-3 pr-10  appearance-none rounded-xl text-black text-md font-poppins font-medium shadow-[0px_5.62px_5.62px_0px_rgba(0,0,0,0.25)]"
                  >
                    <option value="default">{element}</option>
                    <option value="demo">demo</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <ChevronDown
                      size={28}
                      strokeWidth={0}
                      fill="black"
                      className="text-black"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-2 py-7 flex flex-wrap gap-6 justify-center md:justify-between">
            <div className="flex flex-col md:grid  md:grid-cols-8 lg:grid-cols-10  ">
              <div className="md:col-span-4 lg:col-span-3 flex justify-center ">
                <div className="pb-6 md:pb-0 pr-0 md:pr-6  w-full h-auto">
                  <FilterPanel />

                  <div className=" flex-col gap-6 pt-6 hidden md:flex lg:hidden">
                  <Card className="w-full">
                    <CardContent className="p-6">
                      <h2 className="text-2xl leading-normal font-medium font-poppins text-black mb-2">
                        See 10 Jobs in Futured Companies
                      </h2>
                      <div className="flex flex-wrap">
                  
                          <img
                            src={futuredCompanies[0]}
                            alt={`${futuredCompanies[0]} logo`}
                            className="w-32 h-16 object-contain"
                          />
            
                      </div>
                    </CardContent>
                  </Card>
                  <ResumeBuilderCard />
                </div>
                </div>
              </div>
              <div className=" md:col-span-4 lg:col-span-5">
                <div className="pr-0 lg:pr-6  w-full h-auto">
                  <JobList />
                </div>
              </div>
              <div className="col-span-4  md:col-span-8 lg:col-span-2 flex justify-center ">
                <div className=" flex-col gap-6 hidden lg:flex">
                  <Card className="w-full">
                    <CardContent className="p-6">
                      <h2 className="text-2xl leading-normal font-medium font-poppins text-black mb-2">
                        See 10 Jobs in Futured Companies
                      </h2>
                      <div className="flex ">
                        <div className="lg:flex xl:hidden">
                          <img
                            src={futuredCompanies[0]}
                            alt={`${futuredCompanies[0]} logo`}
                            className="w-32 h-16 object-contain"
                          />
                        </div>

                        {/* Show 3 elements on xl */}
                        <div className="hidden xl:flex xl:gap-1 2xl:gap-4 ">
                          {futuredCompanies.slice(0, 3).map((ele, idx) => (
                            <img
                              src={ele}
                              key={idx}
                              alt={`${ele} logo`}
                              className="w-32 h-16 object-contain"
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <ResumeBuilderCard />
                </div>
              </div>
            </div>
          </div>
          {/* <Pagination/> */}
          <JobPortalBottom />
        </div>
      </div>
    </>
  );
}

export default JobSearch;
