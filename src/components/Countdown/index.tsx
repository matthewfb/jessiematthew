"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import "./index.css";
import { useTimeCountdown } from "@/hooks/useTimeCountdown";
import WeMadeIt from "../WeMadeIt";

type MyFormattedTime = {
  days: number;
  hours: number;
  minutes: number;
};
export default function Countdown() {
  const { isMarried, formattedTime } = useTimeCountdown();
  return (
    <Box>
      {isMarried ? <WeMadeIt /> : null}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        columnGap={{ xs: "1rem", md: "3rem" }}
        width="100%"
      >
        <FloralFrame
          time={`${formattedTime.days}D`}
          data-aos="fade-up-right"
          data-aos-delay="1000"
        />
        <FloralFrame
          time={`${formattedTime.hours}H`}
          data-aos="flip-up"
          data-aos-delay="1000"
        />
        <FloralFrame
          time={`${formattedTime.minutes}M`}
          data-aos="fade-up-left"
          data-aos-delay="1000"
        />
      </Box>
    </Box>
  );
}

type FloralFrameProps = {
  time: string;
  [key: string]: any;
};

const FloralFrame = ({ time, ...rest }: FloralFrameProps) => {
  const onClick = () => {
    document
      .getElementById("time-and-place")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      id="floral_frame"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={{ xs: "100px", md: "200px" }}
      height={{ xs: "100px", md: "200px" }}
      position="relative"
      zIndex="2"
      sx={{
        background: "url('/images/floral_frame.png') no-repeat center",
        backgroundSize: "cover",
        ":hover": {
          transform: "scale(1.1)",
          transition: "transform 0.5s",
          color: "var(--light-orange)",
          cursor: "pointer",
        },
      }}
      onClick={onClick}
      {...rest}
    >
      <Typography variant="h3" fontFamily="Iosevka">
        {time}
      </Typography>
    </Box>
  );
};
