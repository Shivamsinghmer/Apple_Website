import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 768 ? heroVideo : smallHeroVideo
  );

  useGSAP(() => {
    gsap.to(".hero-title", {
      y: 0,
      delay: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2,
    });
    gsap.to("#cta", {
      y: 0,
      delay: 1.5,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2,
    });
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black relative ">
      <div className="h-4/6 w-full flex-center flex-col mt-10">
        <p className="hero-title">iPhone 16 pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className=" flex flex-col opacity-0 translate-y-20 items-center"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
