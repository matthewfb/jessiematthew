import { Box } from "@mui/material";
import React from "react";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Box display="flex" width="100%">
      <Box width="100%" maxWidth="1440px" margin="0 auto">
        {id}
      </Box>
    </Box>
  );
}
