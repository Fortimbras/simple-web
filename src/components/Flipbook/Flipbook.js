// src/Flipbook/Flipbook.js

import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Flipbook.css';

const Flipbook = () => {
  // Generate an array of image paths for pages 1 to 63
  const pages = Array.from({ length: 63 }, (_, index) => {
    const pageNum = String(index + 1).padStart(3, '0'); // Pad numbers with zeros (e.g., '001', '002')
    return `images/page_${pageNum}.png`;
  });

  return (
    <div className="flipbook-container">
      <HTMLFlipBook width={600} height={800} className="flipbook">
        {pages.map((page, index) => (
          <div key={index} className="page">
            <img src={page} alt={`Page ${index + 1}`} className="page-image" />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default Flipbook;
