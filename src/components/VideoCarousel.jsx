import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setvideo] = useState({
    isEnd:false,
    startPlay:false,
    videoId:0,
    isLastVideo:false,
    isPlaying:false,
  })
  const [loadedData,setLoadedData] = useState([])
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying} = video;
  
  useEffect(() => {
    if(loadedData.length >3){
        if(!isPlaying){
            videoRef.current[videoId].pause();
        }
        else{
            startPlay && videoRef.current[videoId].play();
        }
    }
  
    return () => {
      
    }
  }, [startPlay,videoId,isPlaying, loadedData])
  

  /* use effect side code videoId veya startPlay değiştiğinde çalışacak */
  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if(span[videoId]){
        let anim = gsap.to(span[videoId],{
            onUpdate:() =>{

            },
            onComplete: () =>{

            },
        })
    }
    return () => {
    }
  }, [videoId, startPlay])
  

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setvideo((prevVideo) => ({
                      ...prevVideo, isPlaying:true
                    }))
                  }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;