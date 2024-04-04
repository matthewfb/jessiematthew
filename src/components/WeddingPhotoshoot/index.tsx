"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import FirstImg from "@/assets/images/wd-pts-1.jpg";
import SecondImg from "@/assets/images/wd-pts-2.jpg";
import ThirdImg from "@/assets/images/wd-pts-3.jpg";
import FourthImg from "@/assets/images/wd-pts-4.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

import "./index.css";
// import scss module
import "./star.module.scss";

export default function WeddingPhotoshoot() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const jessie = ["Jessie", "Trang Thien"];
  const matthew = ["Matthew", "Truong Nguyen"];
  const [wifeAlias, setWifeAlias] = useState(jessie[0]);
  const [husbandAlias, setHusbandAlias] = useState(matthew[0]);

  const onMouseEnterNames = () => {
    setWifeAlias(jessie[1]);
    setHusbandAlias(matthew[1]);
  };

  const onMouseLeaveNames = () => {
    setWifeAlias(jessie[0]);
    setHusbandAlias(matthew[0]);
  };

  return (
    <Box
      justifyContent="center"
      position="relative"
      width="100%"
      minHeight="100vh"
    >
      <Box
        maxWidth="1920px"
        margin="0 auto"
        paddingX="2rem"
        paddingTop={{
          xs: "10rem",
          md: 0,
        }}
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={{ xs: "2rem", md: "4rem" }}
          >
            <Box display="flex" alignItems="flex-end">
              <motion.div
                style={{
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                initial={{
                  rotate: "-90deg",
                  translateX: isMobile ? "-100px" : "-300px",
                  translateY: "400px",
                  opacity: 0,
                }}
                whileInView={{
                  rotate: "0deg",
                  translateX: "0px",
                  translateY: "0px",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Image
                  src={FirstImg}
                  alt="jessie matthew photoshoot 1"
                  width={isMobile ? 450 : 800}
                  height={isMobile ? 250 : 300}
                  loading="lazy"
                />
              </motion.div>
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <motion.div
                style={{
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                initial={{
                  rotate: "90deg",
                  translateX: "300px",
                  translateY: "400px",
                  opacity: 0,
                }}
                whileInView={{
                  rotate: "0deg",
                  translateX: "0px",
                  translateY: "0px",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Image
                  src={SecondImg}
                  alt="jessie matthew photoshoot 1"
                  height={isMobile ? 500 : 600}
                  width={isMobile ? 200 : 300}
                  loading="lazy"
                />
              </motion.div>
            </Box>
          </Box>
          <motion.div
            style={{
              width: "100%",
              paddingTop: isMobile ? "2rem" : "4rem",
              paddingBottom: isMobile ? "2rem" : "4rem",
            }}
            initial={{
              translateY: "100px",
              opacity: 0,
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            <Typography
              variant="h3"
              textAlign="center"
              fontFamily="LilyScriptOne"
            >
              &quot;Love yesterday, today and forever&quot;
            </Typography>
          </motion.div>
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={{ xs: "2rem", md: "4rem" }}
            paddingLeft={{ xs: 0, md: "6.5rem" }}
          >
            <Box display="flex" alignItems="flex-end">
              <motion.div
                style={{
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                initial={{
                  rotate: "-90deg",
                  translateX: "-300px",
                  translateY: "200px",
                  opacity: 0,
                }}
                whileInView={{
                  rotate: "0deg",
                  translateX: "0px",
                  translateY: "0px",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Image
                  src={ThirdImg}
                  alt="jessie matthew photoshoot 3"
                  height={isMobile ? 500 : 600}
                  width={isMobile ? 200 : 300}
                  loading="lazy"
                />
              </motion.div>
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <motion.div
                style={{
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                  height: "fit-content",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                initial={{
                  rotate: "-90deg",
                  translateX: isMobile ? "100px" : "300px",
                  translateY: "200px",
                  opacity: 0,
                }}
                whileInView={{
                  rotate: "0deg",
                  translateX: "0px",
                  translateY: "0px",
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Image
                  src={FourthImg}
                  alt="jessie matthew photoshoot 4"
                  width={isMobile ? 450 : 800}
                  height={isMobile ? 250 : 300}
                  loading="lazy"
                />
              </motion.div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        top={{ xs: "4vh", md: "10vh" }}
        left="0"
        marginLeft="11vw"
        onMouseEnter={onMouseEnterNames}
        onMouseLeave={onMouseLeaveNames}
        zIndex={2}
        sx={{
          transition: "all ease 0.5s",
        }}
      >
        <Typography variant="h2" color="var(--lighter-text)" className="alias">
          {wifeAlias}
        </Typography>
        <Typography variant="h2" color="var(--lighter-text)" className="alias">
          {husbandAlias}
        </Typography>
      </Box>
      <div id="stars-group-1"></div>
      <div id="stars-group-2"></div>
      <div id="stars-group-3"></div>
      <div id="stars-group-4"></div>
      <div id="stars-group-5"></div>
      <div id="stars-group-6"></div>
    </Box>
  );
}
