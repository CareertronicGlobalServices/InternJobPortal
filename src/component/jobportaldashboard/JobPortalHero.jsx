import React from "react";
export default function JobPortalHero() {
  return (
    <div className=" bg-black overflow-x-clip h-auto">
      <div className=" relative w-full h-auto bg-[url(/JobPortpage1Header1.svg)] bg-no-repeat bg-cover sm:min-h-[50rem] max-h-[50rem] aspect-[16/9]">
        <div className="absolute inset-0  bg-black opacity-80"></div>
        <div className="relative z-10 px-5 md:max-w-5xl h-full lg:max-w-6xl mx-auto ">
          <div className="flex flex-col justify-around items-center h-full gap-4 sm:gap-10 px-10 py-10 sm:py-24">
            {/* Ensures h1 is fully visible */}
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-6">
              <h1 className="text-white text-2xl sm:text-6xl font-poppins text-center font-extrabold ">
                Welcome to <span className="text-red-600">Careertronic</span>
              </h1>
              <p className="text-white text-lg sm:text-2xl font-poppins text-center font-extrabold ">
                Your Gateway to Career Success
              </p>
            </div>
            <div className=" bg-black hidden sm:block font-poppins  bg-opacity-30 w-full h-auto px-12 py-4 sm:py-16">
              <p className=" text-white text-xs sm:text-xl text-justify spa">
                Careertronic Global Services Private Limited (CGSPL) is proud to
                introduce an advanced, AI-powered job portal designed to bridge
                the gap between job seekers and employers. Whether you&apos;re
                an individual looking for your dream job or a company seeking
                top talent, Careertronic provides a seamless, efficient platform
                that offers innovative solutions tailored to meet the needs of
                both job seekers and employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
