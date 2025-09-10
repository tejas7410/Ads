import React from 'react';
import Video1 from '../assets/Video1.mp4';
import Video2 from '../assets/Video2.mp4';
import Video3 from '../assets/Video3.mp4';
import Video4 from '../assets/Video4.mp4';

const videos = [Video1, Video2, Video3, Video4];

function VideoCarousel() {
    return (
        <div className="bg-yellow-100 p-8">
            <div className="flex flex-wrap justify-center gap-6">
                {videos.map((video, index) => (
                    <div key={index} className="flex justify-center items-center  rounded-lg">
                        <video
                            src={video}
                            className="max-w-full max-h-[500px] object-contain"
                            style={{ flexBasis: '45%' }}  // Max 2 per row
                            autoPlay
                            loop
                            muted
                            controls
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoCarousel;
