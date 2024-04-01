"use client";

import "swiper/react";
import "swiper/css";
import "./styles.css";

import React, { useEffect, useLayoutEffect } from "react";
import Landing from "../Landing";
import OurStory from "../OurStory";
import { SlideContextProvider } from "@/providers/SlideContextProvider";
import AnimatedLeft from "../AnimatedLeft";
import RollingMenu from "../RollingMenu";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import WeddingPhotoshoot from "../WeddingPhotoshoot";
import TimePlace from "../TimePlace";
import Aos from "aos";
import { useMediaQuery } from "@mui/material";

export default function SwiperControl() {
  const isMobile = useMediaQuery("(max-width: 1439px)");
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isMobile && activeSlide === 0 && latest > 1300) {
      setActiveSlide(1);
    }
    if (!isMobile && activeSlide !== 0 && latest < 1300) {
      setActiveSlide(0);
    }

    if (isMobile && activeSlide === 0 && latest > 900) {
      setActiveSlide(1);
    }
    if (isMobile && activeSlide !== 0 && latest < 900) {
      setActiveSlide(0);
    }
  });

  // useEffect(() => {
  //   if (scrollYProgress > 1300) {
  //     setActiveSlide(1);
  //   }
  // }, [scrollYProgress]);

  useLayoutEffect(() => {
    Aos.init();
  }, []);

  return (
    <SlideContextProvider activeSlide={activeSlide}>
      <ParallaxProvider>
        <Landing />
        <OurStory />
        <WeddingPhotoshoot />
        <TimePlace />
      </ParallaxProvider>
      <AnimatedLeft activeSlide={activeSlide} />
      {/* <RollingMenu activeSlide={activeSlide} /> */}
    </SlideContextProvider>
  );
}
