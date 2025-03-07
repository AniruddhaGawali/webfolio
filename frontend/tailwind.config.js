/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(-45deg, hsl(var(--p3)) 0%,hsl(var(--p2)) 25%,hsl(var(--p1)) 100%)",
        "gradient-dark":
          "linear-gradient( -45deg, hsl(var(--p4)) 0%, hsl(var(--p3)) 25%, hsl(var(--p2)) 35%,hsl(var(--p1)) 100%)",
      },
      fontFamily: {
        "daretro-mandra": ["Daretro Mandra", "sans"],
        boone: ["BOONE Regular", "sans-serif"],
        "noto-sans": ["Noto Sans", "serif"],
        "yarndings-20": ["Yarndings 20", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        p1: "hsl(var(--p1))",
        p2: "hsl(var(--p2))",
        p3: "hsl(var(--p3))",
        p4: "hsl(var(--p4))",

        foreground: "hsl(var(--foreground))",
        "p1-foreground": "hsl(var(--p1-foreground))",
        "p2-foreground": "hsl(var(--p2-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 1s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
