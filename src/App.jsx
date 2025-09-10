import React, { useState, useEffect } from 'react';
import Ad1 from './assets/Ad1.jpg';
import Ad2 from './assets/Ad2.jpg';
import Ad3 from './assets/Ad3.jpg';
import Ad4 from './assets/Ad4.jpg';

const images = [Ad1, Ad2, Ad3, Ad4];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 flex items-center justify-center">
      <div className="relative w-full max-w-5xl flex justify-center items-center overflow-hidden h-64">
        {images.map((img, index) => {
          // Determine relative position
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          return (
            <img
              key={index}
              src={img}
              alt={`Ad ${index + 1}`}
              className={`
                absolute transition-all duration-700 ease-in-out
                ${isActive ? 'scale-105 z-20 opacity-100' : 'scale-90 z-10 opacity-50'}
                ${isPrev ? '-translate-x-72' : ''}
                ${isNext ? 'translate-x-72' : ''}
              `}
              style={{ width: '24rem', height: '16rem', borderRadius: '0.5rem', objectFit: 'cover', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
