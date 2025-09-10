import React, { useState, useEffect } from 'react';
import Video1 from '../assets/video1.mp4';
import Video2 from '../assets/video2.mp4';

const videos = [Video1, Video2];

function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % videos.length);
        }, 4000); // change video every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen bg-yellow-300 flex justify-center items-center overflow-hidden">
            {videos.map((video, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + videos.length) % videos.length;
                const isNext = index === (currentIndex + 1) % videos.length;

                return (
                    <div
                        key={index}
                        className={`
              absolute w-full h-full flex justify-center items-center transition-all duration-700 ease-in-out
              ${isActive ? 'opacity-100 scale-105 z-20' : 'opacity-0 scale-90 z-10'}
              ${isPrev ? '-translate-x-full' : ''}
              ${isNext ? 'translate-x-full' : ''}
            `}
                    >
                        <video
                            src={video}
                            className="w-full h-full object-contain bg-yellow-300"
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default VideoCarousel;
