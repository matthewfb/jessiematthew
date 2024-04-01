"use client";

import "swiper/react";
import "swiper/css";
import "./styles.css";

import React, { useEffect } from "react";
import Landing from "../Landing";
import OurStory from "../OurStory";
import { SlideContextProvider } from "@/providers/SlideContextProvider";
import AnimatedLeft from "../AnimatedLeft";
import RollingMenu from "../RollingMenu";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import WeddingPhotoshoot from "../WeddingPhotoshoot";
import TimePlace from "../TimePlace";
import InformationRight from "../InformationRight";
import Cursor from "../Cursor";

export default function SwiperControl() {
  const [activeSlide, setActiveSlide] = React.useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (activeSlide === 0 && latest > 1300) {
      setActiveSlide(1);
    }
    if (activeSlide !== 0 && latest < 1300) {
      setActiveSlide(0);
    }
  });

  // useEffect(() => {
  //   if (scrollYProgress > 1300) {
  //     setActiveSlide(1);
  //   }
  // }, [scrollYProgress]);

  return (
    <SlideContextProvider activeSlide={activeSlide}>
      <ParallaxProvider>
        <Landing />
        <OurStory />
        <WeddingPhotoshoot />
        <TimePlace />
      </ParallaxProvider>
      <AnimatedLeft activeSlide={activeSlide} />
      <InformationRight />
      <Cursor />
      {/* <RollingMenu activeSlide={activeSlide} /> */}
    </SlideContextProvider>
  );
}
