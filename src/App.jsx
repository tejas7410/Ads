import React, { useState, useEffect } from 'react';
import Ad1 from './assets/Ad1.jpg';
import Ad2 from './assets/Ad2.jpg';
import Ad3 from './assets/Ad3.jpg';
import Ad4 from './assets/Ad4.jpg';
import Navbar from './components/navbar';
import VideoCarousel from './components/video';
import Footer from './components/footer';

const images = [Ad1, Ad2, Ad3, Ad4];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <VideoCarousel />
      <div className="min-h-screen bg-yellow-300 flex items-center justify-center pt-20">
        <div className="relative w-full max-w-2xl flex justify-center items-center h-140">
          {images.map((img, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + images.length) % images.length;
            const isNext = index === (currentIndex + 1) % images.length;

            return (
              <div
                key={index}
                className={`
                  absolute flex justify-center items-center transition-all duration-700 ease-in-out
                  ${isActive ? 'scale-105 z-20 opacity-100' : 'scale-90 z-10 opacity-50'}
                  ${isPrev ? '-translate-x-72' : ''}
                  ${isNext ? 'translate-x-72' : ''}
                `}
              >
                <img
                  src={img}
                  alt={`Ad ${index + 1}`}
                  className="rounded-lg shadow-lg"
                  style={{
                    width: '645px',       // fixed width
                    height: '645px',      // fixed height
                    objectFit: 'cover',   // maintain aspect ratio by cropping
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
