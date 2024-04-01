"use client";

import { Box, Typography } from "@mui/material";
import "@/assets/styles/globals.css";

export default function Loading() {
  return (
    <Box className="loading">
      <Box className="loading__spinner"></Box>
      <Typography variant="h6" fontFamily="LilyScriptOne">
        Loading...
      </Typography>
    </Box>
  );
}
