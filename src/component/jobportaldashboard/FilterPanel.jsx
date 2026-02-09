"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "../../component/ui/card";
import { Button } from "../../component/ui/button";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { companyTypes, locations, workModes } from '@/lib/config';

const FilterPanel = () => {
  const [expandedSections, setExpandedSections] = useState({
    companyType: false,
    location: false,
    workMode :false
  });

 
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderFilterSection = (title, items, sectionKey) => {
    const isExpanded = expandedSections[sectionKey];
    const displayItems = isExpanded ? items : items.slice(0, 4);

    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="space-y-2">
        {displayItems.map((item, index) => (
        <label key={index} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4"
         
          />
          <span className="flex-1 font-poppins">{item.name}</span>
          <span className="text-gray-500 font-poppins">({item.count})</span>
        </label>
      ))}
        </div>
        {items.length > 4 && (
          <Button
            variant="link"
            className="mt-2 text-red-500 hover:text-red-600 p-0 font-poppins"
            onClick={() => toggleSection(sectionKey)}
          >
            View More
            {isExpanded ? (
              <ChevronUp className="ml-1 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold font-poppins">All Filters</h1>
          <span className="text-sm text-gray-500 font-poppins">Applied (1)</span>
        </div>
        
        {renderFilterSection('Company type', companyTypes, 'companyType')}
        {renderFilterSection('Location', locations, 'location')}
        {renderFilterSection('Work Mode', workModes, 'workMode')}
      </CardContent>
    </Card>
  );
};

export default FilterPanel;