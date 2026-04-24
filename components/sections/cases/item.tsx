"use client";
import { useRef, useState, useEffect } from "react";
import { Case } from ".";

export default function VideoCard({ video, title }: Case) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleGlobalPause = (e: any) => {
      if (e.detail.videoRef !== videoRef.current) {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener("pauseAllVideos", handleGlobalPause);
    return () =>
      window.removeEventListener("pauseAllVideos", handleGlobalPause);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      const event = new CustomEvent("pauseAllVideos", {
        detail: { videoRef: videoRef.current },
      });
      window.dispatchEvent(event);

      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="group cursor-pointer gap-4 lg:gap-[19px] flex w-full max-w-[472px] flex-col relative h-full mx-auto">
      <div className="relative flex-1 w-full cursor-pointer rounded-[20px] overflow-hidden bg-zinc-900">
        <video
          ref={videoRef}
          src={video}
          loop
          muted
          playsInline
          className="w-full h-[50vh] min-h-[350px] lg:h-[calc(100vh-350px)] lg:max-h-[520px] object-cover cursor-pointer"
          onClick={togglePlay}
        />
        <button
          onClick={togglePlay}
          className={`absolute inset-0 flex items-center justify-center ${isPlaying ? "opacity-0" : "opacity-100"} transition-opacity bg-black/20`}
        >
          <div className="w-[82px] h-[82px] cursor-pointer flex items-center justify-center rounded-full bg-white/20 relative backdrop-blur-md">
            <div
              className={`w-4.5 h-5 flex justify-between rounded-sm transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
            >
              <div className="bg-white h-full w-1.5 rounded-[3px]"></div>
              <div className="bg-white h-full w-1.5 rounded-[3px]"></div>
            </div>

            <svg
              className={`absolute top-1/2 scale-60 left-[52%] transition-opacity duration-300 fill-white -translate-1/2 ${isPlaying ? "opacity-0" : "opacity-100"}`}
              viewBox="0 0 100 100"
            >
              <path
                d="M25 15 L75 50 L25 85 Z"
                stroke="white"
                strokeWidth="10"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
      <p className="text-[20px] lg:text-[24px] max-md:hidden leading-[135%] flex items-start text-balance shrink-0">
        {title}
      </p>
    </div>
  );
}
