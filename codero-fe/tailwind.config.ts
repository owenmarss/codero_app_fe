import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary" : "#2392ED",
                "secondary": "#06C3FF",
                "red": "#cc1818",
                "red-secondary": "#ff0000",
                "green": "#17b169", 
                "green-secondary": "#32de84",
                "orange": "#F2994A",
                "orange-secondary": "#F2C94C",
                "yellow": "#FCC737",
                "yellow-secondary": "#FFEB00",
            },
            width: {
                "right": "calc(100% - 18rem)"
            }
        },
    },
    plugins: [],
};
export default config;
