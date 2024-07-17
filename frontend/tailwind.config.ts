import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '80px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gradient-start': 'rgba(169, 82, 163, 0.08)',
        'gradient-middle': 'rgba(236, 161, 17, 0.08)',
        'gradient-end': 'rgba(36, 103, 12, 0.08)',
      },
      blur: {
        24: '24px',
      },
    },
  },
  plugins: [],
};
export default config;
