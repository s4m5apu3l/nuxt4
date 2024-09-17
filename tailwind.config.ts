import type { Config } from "tailwindcss";
const animate = require("tailwindcss-animate");

export default <Partial<Config>>(<unknown>{
	darkMode: ["class"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				main: "#FF6900",
				black: "#212121",
				gray: "#8F8F8F",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
		fontFamily: {
			sans: ["Onest", "sans-serif"],
		},
		fontSize: {
			base: "16px",
			"12": "12px",
			"14": "14px",
			"16": "16px",
			"18": "18px",
			"20": "20px",
			"22": "22px",
			"24": "24px",
			"32": "32px",
		},
	},
	content: [
		"./pages/**/*.{ts,tsx,vue}",
		"./components/**/*.{ts,tsx,vue}",
		"./app/**/*.{ts,tsx,vue}",
		"./src/**/*.{ts,tsx,vue}",
	],
	plugins: [animate],
});
