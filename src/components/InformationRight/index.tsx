"use client";

import { Box, Typography } from "@mui/material";

export default function InformationRight() {
  const onScrollToTimePlace = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <Box
      position="fixed"
      right="0"
      top={{ xs: "6rem", md: "10rem" }}
      zIndex={11}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap="0.25rem"
        zIndex="12"
        marginRight="10vw"
        paddingTop="10px"
        paddingBottom="10px"
        width="40px"
        sx={{
          backgroundColor: "var(--brown-bg)",
          boxShadow: "0 0 10px 0 var(--brown-bg)",
          color: "var(--lighter-text)",
          cursor: "pointer",
        }}
        borderRadius="4px"
        data-aos="fade-left"
        data-aos-delay="1500"
        data-aos-duration="1500"
        onClick={onScrollToTimePlace}
      >
        <Typography variant="h6" fontFamily="Iosevka">
          05
        </Typography>
        <Typography variant="h6" fontFamily="Iosevka">
          /
        </Typography>
        <Typography variant="h6" fontFamily="Iosevka">
          05
        </Typography>
      </Box>
      <Box position="fixed" right="0" bottom="10vh" marginRight="10vw">
        <Typography
          variant="h6"
          fontFamily="Darling"
          sx={{
            writingMode: "vertical-rl",
          }}
        >
          HoChiMinh, VN
        </Typography>
      </Box>
    </Box>
  );
}
