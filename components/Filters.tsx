'use client';

import { useState } from 'react';

const filterCategories = [
  {
    name: 'CUSTOMIZABLE',
    options: ['Yes', 'No'],
  },
  {
    name: 'IDEAL FOR',
    options: ['All', 'Men', 'Women', 'Kids'],
  },
  {
    name: 'OCCASION',
    options: ['All', 'Casual', 'Formal', 'Sport'],
  },
  {
    name: 'WORK',
    options: ['All', 'Office', 'Outdoor', 'Home'],
  },
  {
    name: 'FABRIC',
    options: ['All', 'Cotton', 'Leather', 'Synthetic'],
  },
  {
    name: 'SEGMENT',
    options: ['All', 'Premium', 'Regular'],
  },
];

const Filters = () => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpanded(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="w-64 pr-8">
      <h2 className="font-medium mb-4">FILTER</h2>
      {filterCategories.map((category) => (
        <div key={category.name} className="mb-4">
          <button
            onClick={() => toggleCategory(category.name)}
            className="flex items-center justify-between w-full text-left mb-2"
          >
            <span className="text-sm font-medium">{category.name}</span>
            <span>{expanded.includes(category.name) ? '-' : '+'}</span>
          </button>
          {expanded.includes(category.name) && (
            <div className="space-y-2">
              {category.options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;