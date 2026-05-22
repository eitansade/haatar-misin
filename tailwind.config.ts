import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skyCare: "#8ECDF2",
        peachCare: "#FFD1BE",
        creamCare: "#FFF9F4",
        coralCare: "#FF7F73",
        mintCare: "#BEE8D3",
        inkCare: "#22313F",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(34, 49, 63, 0.10)",
      },
      borderRadius: {
        soft: "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
