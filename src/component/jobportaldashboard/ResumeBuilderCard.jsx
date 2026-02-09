import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ResumeBuilderCard = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h2 className="text-2xl leading-normal font-medium font-poppins text-black mb-2">
          Build a job ready resume with us
        </h2>
        
        <p className="text-gray-800 text-[0.69rem] 2xl:text-sm block lg:hidden xl:block leading-relaxed  font-poppins mb-4">
          Our easy-to-use resume builder guides you through creating an eye-catching, formatted resume. Plus, access expert interview tips, career advice, and resources to boost your job search. Whether you're starting fresh or looking to switch careers, we've got you covered.
        </p>

        <button 
          className=" font-poppins bg-gradient-to-r from-[#FF6B4B] to-[#FF4B6B]  text-white text-md font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
          style={{
            boxShadow: '0 4px 14px rgba(255, 107, 75, 0.4)'
          }}
        >
          Build My Resume
        </button>
      </CardContent>
    </Card>
  );
};

export default ResumeBuilderCard;