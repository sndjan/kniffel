import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wuerfelkarte",
    short_name: "Wuerfelkarte",
    description:
      "Wuerfelkarte ist eine Webseite, um den Spielstand von Würfelspielen zu verfolgen.",
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
