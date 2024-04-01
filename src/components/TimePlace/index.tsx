import { Box, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

export default function TimePlace() {
  const isMobile = useMediaQuery("(max-width: 1439px)");
  return (
    <Box minHeight="100vh" width="100%" id="time-and-place" paddingTop="10rem">
      <Box maxWidth="1440px" margin="0 auto" paddingY="4rem" paddingX="1.5rem">
        <Typography
          variant={isMobile ? "h2" : "h1"}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Time & Place
        </Typography>
        <Box color="var(--lighter-text)" paddingTop="2rem">
          <Typography
            variant="h4"
            fontFamily="Darling"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            03 Đặng Văn Sâm Street, 9 Ward, Phú Nhuận District, Hồ Chí Minh City
          </Typography>
          <Typography
            variant="h2"
            fontFamily="Iosevka"
            marginTop="2rem"
            sx={{
              position: "relative",
              transition: "all ease 0.3s",
              zIndex: 2,
              ":hover": {
                color: "var(--light-orange)",
              },
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            19:00 PM - 21:00 PM
          </Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.4759753652634!2d106.67626930369013!3d10.811044949369409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292d257cfe31%3A0x8a867839593c68c8!2zMyDEkOG6t25nIFbEg24gU8OibSwgUGjGsOG7nW5nIDksIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1711526232588!5m2!1sen!2s"
          width="100%"
          height="800px"
          style={{
            border: 0,
            position: "relative",
            zIndex: 4,
            marginTop: "2rem",
            borderRadius: "8px",
          }}
          loading="lazy"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
        ></iframe>
        <Box paddingTop="2rem">
          <Typography
            variant="h6"
            fontFamily="DancingScript"
            sx={{
              position: "relative",
              transition: "all ease 0.3s",
              zIndex: 2,
              cursor: "pointer",
              ":hover": {
                color: "var(--light-orange)",
              },
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Link href="/gallery">
              === Guest Images (Will available after the wedding) ===
            </Link>
          </Typography>
        </Box>
        <Box paddingTop="2rem">
          <Typography
            fontFamily="LilyScriptOne"
            color="var(--lighter-text)"
            variant="h5"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            Love is patient, love is kind. It does not envy, it does not boast,
            it is not proud. It does not dishonor others, it is not
            self-seeking, it is not easily angered, it keeps no record of wrongs
            - 1 Corinthians 13:4-5
          </Typography>
          <Typography
            variant="h1"
            fontFamily="DancingScript"
            color="var(--light-orange)"
            data-aos="fade-down"
            data-aos-delay="1500"
            data-aos-duration="1500"
          >
            Love --- Jessie & Matthew
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
