"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

export default function Page() {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1" color="error">
        404
      </Typography>
      <Typography variant="h4" color="error">
        Page Not Found
      </Typography>
    </Box>
  );
}
