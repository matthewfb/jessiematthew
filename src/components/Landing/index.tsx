"use client";

import React from "react";
import { Box } from "@mui/material";
import Countdown from "../Countdown";
import OurName from "../OurName";
import "./index.css";

export default function Landing() {
  return (
    <Box
      width="100%"
      sx={{
        background:
          "url('/images/landing_bg_min.JPG'), url('/images/stars_min.jpg')",
        backgroundPosition: "64% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "lighten",
      }}
    >
      <Box
        maxWidth="1920px"
        width="100%"
        height="100%"
        margin="auto"
        display="flex"
        position="relative"
        zIndex="4"
        sx={{
          filter: "blur(0)",
        }}
      >
        <Box
          paddingX="1.25rem"
          paddingTop={{ xs: "7rem", md: "10rem" }}
          width="100%"
          minHeight="100vh"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box textAlign="center">
            <OurName />
          </Box>
          <Box textAlign="center" paddingTop={{ xs: "8rem", md: "18rem" }}>
            <Countdown />
          </Box>
          <div id="background-wrap">
            <div className="bubble x1"></div>
            <div className="bubble x2"></div>
            <div className="bubble x3"></div>
            <div className="bubble x4"></div>
            <div className="bubble x5"></div>
            <div className="bubble x6"></div>
            <div className="bubble x7"></div>
            <div className="bubble x8"></div>
            <div className="bubble x9"></div>
            <div className="bubble x10"></div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
