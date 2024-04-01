"use client";

import { Box } from "@mui/material";
import SwiperControl from "@/components/SwiperControl";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <Box width="100%" height="100%">
        <Suspense fallback={<Loading />}>
          <SwiperControl />
        </Suspense>
      </Box>
    </main>
  );
}
