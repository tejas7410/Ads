import React from 'react';
import Video1 from '/Videos/Video1.mp4';

function VideoCarousel() {
    return (
        <div className="bg-black min-h-screen flex items-center font-fredoka justify-center relative text-white">
            {/* Left Tagline */}
            {/* <div className="absolute left-40 text-5xl  max-w-xs">
                Crafting the juiciest burgers, one flip at a time!
            </div> */}

            {/* Video */}
            <video
                src={Video1}
                autoPlay
                loop
                muted
                controls
                className="h-[100vh] object-cover z-10"
            />

            {/* Right Tagline */}
            <div className="absolute right-40 text-5xl max-w-xs text-right">
                Sizzling secrets revealed – burger mastery unlocked!
            </div>
        </div>
    );
}

export default VideoCarousel;
