"use client";

import React, { use } from "react";
import "./index.css";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function OurStory() {
  const isMobile = useMediaQuery("(max-width: 1439px)");
  const [progress, setProgress] = React.useState(0);
  const [entered, setEntered] = React.useState(false);

  const { ref: rightParallaxRef } = useParallax<HTMLDivElement>({
    speed: 100,
  });

  const { ref: leftParallaxRef } = useParallax<HTMLDivElement>({
    speed: 40,
  });

  const { ref } = useParallax<HTMLDivElement>({
    speed: 20,
  });

  const { ref: nameRef } = useParallax<HTMLDivElement>({
    translateX: ["100px", isMobile ? "-1000px" : "-700px"],
  });

  const { ref: nameBackgroundRef } = useParallax<HTMLDivElement>({
    translateX: ["100px", "-2000px"],
  });

  return (
    <Parallax
      onProgressChange={(progress) => setProgress(progress)}
      onEnter={() => setEntered(true)}
      onExit={() => setEntered(false)}
    >
      <Box
        width="100%"
        padding={{ xs: "2rem", md: "20rem" }}
        display="flex"
        justifyContent="center"
      >
        <Box
          maxWidth="1920px"
          width="100%"
          paddingLeft={{ xs: 0, md: "2rem" }}
          display="flex"
          position="relative"
          alignItems="center"
          flexDirection={{
            xs: "column",
            md: "row",
          }}
        >
          <Box position="relative">
            <div className="gift-card" ref={ref}>
              <Typography variant="h3" fontFamily="Iosevka">
                05
              </Typography>
              <Typography variant="h3" fontFamily="LilyScriptOne">
                May
              </Typography>
              <Box paddingX="1rem">
                <Box borderRadius="1rem" overflow="hidden">
                  <img
                    src="/images/story-card.JPG"
                    alt="our-story"
                    loading="lazy"
                  />
                </Box>
              </Box>

              <Box paddingTop="2rem" width="100%" paddingX="2rem">
                <Typography variant="h6" fontFamily="LilyScriptOne">
                  &quot;I do&quot; as two words has so much power. It&apos;s a
                  vow; a promise; a commitment.
                </Typography>
                <Typography variant="h6" fontFamily="LilyScriptOne">
                  Thank God for bringing us together.
                </Typography>
              </Box>
            </div>
            <div className="right-parallax" ref={rightParallaxRef}></div>
            <div className="left-parallax" ref={leftParallaxRef}></div>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="calc(100% - 400px)"
            position="relative"
            zIndex={3}
            color="var(--lighter-text)"
            height="fit-content"
          >
            <Box display="flex" flexDirection="column" maxWidth="310px">
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingRight="1rem"
                  data-aos="fade-down-right"
                  data-aos-anchor-placement="center-center"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                >
                  2017 - First known each other
                </Typography>
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingRight="1rem"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-center"
                  data-aos-duration="1000"
                >
                  2019 - Millitary Service & Long Distance
                </Typography>
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingRight="1rem"
                  data-aos="fade-right"
                  data-aos-anchor-placement="center-center"
                  data-aos-duration="1000"
                >
                  2023 - The Proposal
                </Typography>
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingRight="1rem"
                  data-aos="fade-up-right"
                  data-aos-anchor-placement="center-center"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                >
                  2025 - And Beyond
                </Typography>
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box display="flex" flexDirection="column" maxWidth="310px">
              <Box height="6rem" width="100%"></Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingLeft="1rem"
                  data-aos="fade-down-left"
                  data-aos-anchor-placement="center-center"
                  data-aos-duration="1000"
                >
                  2018 - Officially Dating
                </Typography>
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingLeft="1rem"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-center"
                  data-aos-duration="1000"
                >
                  2021 - Covid 19, Ups & Downs
                </Typography>
              </Box>
              <Box height="12rem" width="100%"></Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Divider
                  sx={{
                    width: "3rem",
                  }}
                />
                <Typography
                  variant="body1"
                  fontFamily="LilyScriptOne"
                  paddingLeft="1rem"
                  data-aos="fade-up-left"
                  data-aos-anchor-placement="center-center"
                  data-aos-duration="1000"
                >
                  2024 - The Wedding
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            className="name"
            sx={{
              opacity: 0.4,
            }}
          >
            <Typography variant="h1" fontFamily="LilyScriptOne" ref={nameRef}>
              Jessie &amp; Matthew is getting married
            </Typography>
          </Box>
          <Box
            position="absolute"
            className="name-background"
            sx={{
              opacity: 1,
            }}
            ref={nameBackgroundRef}
          ></Box>
        </Box>
      </Box>
    </Parallax>
  );
}
