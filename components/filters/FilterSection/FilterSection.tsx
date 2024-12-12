'use client';

import { useState } from 'react';
import styles from './FilterSection.module.css';

const filterCategories = [
  { id: 'customizable', name: 'CUSTOMIZABLE', options: ['Yes', 'No'] },
  { id: 'ideal-for', name: 'IDEAL FOR', options: ['All', 'Men', 'Women', 'Kids'] },
  { id: 'occasion', name: 'OCCASION', options: ['All', 'Casual', 'Formal', 'Sport'] },
  { id: 'work', name: 'WORK', options: ['All', 'Office', 'Outdoor', 'Home'] },
  { id: 'fabric', name: 'FABRIC', options: ['All', 'Cotton', 'Leather', 'Synthetic'] },
  { id: 'segment', name: 'SEGMENT', options: ['All', 'Premium', 'Regular'] },
];

const FilterSection = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className={styles.filters}>
      <h2 className={styles.heading}>FILTER</h2>
      {filterCategories.map(category => (
        <div key={category.id} className={styles.category}>
          <button
            className={styles.categoryButton}
            onClick={() => toggleCategory(category.id)}
          >
            <span>{category.name}</span>
            <span>{expandedCategories.includes(category.id) ? '-' : '+'}</span>
          </button>
          {expandedCategories.includes(category.id) && (
            <div className={styles.options}>
              {category.options.map(option => (
                <label key={option} className={styles.option}>
                  <input type="checkbox" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSection;