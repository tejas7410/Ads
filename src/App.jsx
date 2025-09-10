import React from 'react';
import Ad1 from './assets/Ad1.jpg';
import Ad2 from './assets/Ad2.jpg';
import Ad3 from './assets/Ad3.jpeg';
import Ad4 from './assets/Ad4.jpeg';
import Ad5 from './assets/Ad5.jpeg';
import Ad6 from './assets/Ad6.jpeg';
import Ad7 from './assets/Ad7.jpeg';
import Navbar from './components/navbar';
import VideoCarousel from './components/video';
import Footer from './components/footer';

const images = [Ad1, Ad2, Ad3, Ad4, Ad5, Ad6, Ad7];

function App() {
  return (
    <div className='bg-yellow-100'>
      <Navbar />

      <div className="bg-yellow-100 p-8">
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center bg-white rounded-lg shadow-md mt-5">
              <img
                src={img}
                alt={`Ad ${index + 1}`}
                className="max-w-full max-h-[500px] object-contain"
                style={{ flexBasis: '45%' }}   // Two images per row maximum
              />
            </div>
          ))}
        </div>
      </div>

      <VideoCarousel />

      <Footer />
    </div>
  );
}

export default App;
