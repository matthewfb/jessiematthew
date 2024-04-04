import { type Metadata } from "next";
import { theme } from "@/theme/default-theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import "@/assets/styles/globals.css";
import "@/assets/styles/fonts.css";
import "aos/dist/aos.css";
import "animate.css";

export const metadata: Metadata = {
  title: "Jessie & Matthew",
  description: "Jessie and Matthew wedding page",
  keywords: ["Jessie", "Matthew", "wedding"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
