import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Cursor from "@/components/Cursor";
import InformationRight from "@/components/InformationRight";
// import SwiperControl from "@/components/SwiperControl";

const SwiperControl = dynamic(() => import("@/components/SwiperControl"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return (
    <main>
      <Box width="100%" height="100%">
        <SwiperControl />
        <InformationRight />
        <Cursor />
      </Box>
    </main>
  );
}
