import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tsinda Provisoire",
    short_name: "Tsinda Provisoire",
    description: "Menya amategeko y'imihanda w'u Rwanda ukigira imikino.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#00ff88",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
