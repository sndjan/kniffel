import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kniffel-Tracker",
    short_name: "Kniffel",
    description:
      "Kniffel-Tracker ist eine App, um den Spielstand von Kniffel zu verfolgen.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
