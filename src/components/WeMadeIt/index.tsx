import React from "react";
import "./index.css";
import MovingText from "react-moving-text";
import { Box, useMediaQuery } from "@mui/material";

export default function WeMadeIt() {
  const isMobile = useMediaQuery("(max-width:1439px)");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        fontSize: isMobile ? "2rem" : "4rem",
        fontFamily: "LilyScriptOne",
      }}
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <MovingText
        type="bounce"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease-in-out"
        iteration="infinite"
        fillMode="none"
      >
        Thank god we made it!
      </MovingText>
    </Box>
  );
}
