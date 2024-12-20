'use client';

import { useState } from 'react';

const slides = [
  { id: 1, title: 'Select Property 1', property: 'Property 1' },
  { id: 2, title: 'Select Property 2', property: 'Property 2' },
  { id: 3, title: 'Select Property 3', property: 'Property 3' },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProperties, setSelectedProperties] = useState([]);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      // Save the property for the current slide
      const selectedProperty = slides[currentSlide].property;
      setSelectedProperties([...selectedProperties, selectedProperty]);

      // Move to the next slide
      setCurrentSlide(currentSlide + 1);
    } else {
      alert('You have completed the selection!');
      console.log('Selected Properties:', selectedProperties);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{slides[currentSlide].title}</h2>
      <button
        onClick={handleNext}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        {currentSlide < slides.length - 1 ? 'Next' : 'Finish'}
      </button>
    </div>
  );
}
