import React, { useState, useEffect } from 'react';
import './App.css';
import Ad1 from './assets/Ad1.jpg';
import Ad2 from './assets/Ad3.jpeg';
import Ad3 from './assets/Ad6.jpeg';
import Ad4 from './assets/Ad7.jpeg';
import Navbar from './components/navbar';
import VideoCarousel from './components/video';
import Footer from './components/footer';

const ads = [
  { img: Ad1, description: 'Ad 1 - Great Product', link: 'https://example.com/ad1' },
  { img: Ad2, description: 'Ad 2 - Amazing Offer', link: 'https://example.com/ad2' },
  { img: Ad3, description: 'Ad 3 - Limited Time', link: 'https://example.com/ad3' },
  { img: Ad4, description: 'Ad 4 - New Arrival', link: 'https://example.com/ad4' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Navbar />
      <VideoCarousel />
      <div className="w-full flex justify-center mt-10 p-8 bg-gradient-to-r from-purple-900 to-purple-500">


        <div className="w-[120vw] h-[100vh] overflow-hidden mt-20">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {ads.map((ad, index) => (
              <div key={index} className="flex-shrink-0 w-full flex items-center justify-between px-8">
                <div className="w-[55%] flex justify-center">
                  <img
                    src={ad.img}
                    alt={`Ad ${index + 1}`}
                    className="w-full h-[80vh] object-cover border-6 border-amber-500 rounded-3xl shadow-lg"
                  />
                </div>


                <div className="relative w-[40%] p-8 bg-orange-300 shadow-md rounded-lg">
                  <p className="text-2xl font-serif italic text-gray-700 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet...
                  </p>

                  <a
                    href={ad.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 text-center transition-transform transform hover:scale-105"
                  >
                    Learn More
                  </a>

                  <div className="absolute top-0 right-0 h-full w-10 bg-[url('/path-to-wavy-border.svg')] bg-repeat-y pointer-events-none"></div>
                </div>



              </div>
            ))}
          </div>
        </div>
      </div>



      <Footer />
    </div >
  );
}

export default App;
