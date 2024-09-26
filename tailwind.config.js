const colors = require("tailwindcss/colors");

module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./modules/**/*.{js,ts,jsx,tsx}",
		"./utils/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false,
	theme: {
		colors: {
			blackBg: "rgb(2, 2, 2)",
			grayBlack: "rgb(20, 20, 20)",
			black: "rgb(0, 0, 0)",
			blackShade: "#0b0b0b",
			transparent: colors.transparent,
			whiteText: "rgb(230, 230, 230)",
			yellow: colors.yellow,
			red: colors.red,
			green: colors.green,
			white: colors.white,
			pink: colors.pink,
			blue: colors.blue,
			indigo: colors.indigo,
			orange: colors.orange,
			gray: colors.gray,
		},
		screens: {
			xsm: "200px",

			xxs: "320px",

			xs: { max: "575px" },

			sm: { min: "576px", max: "897px" },

			md: "768px",

			lg: "1024px",

			xl: "1280px",

			xxl: "1536px",
		},
		minWidth: {
			0: "0",
			"1/4": "25%",
			"1/2": "50%",
			"3/4": "75%",
			"8/10": "80%",
			"9/10": "90%",
			screen: "100%",
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
				serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
				mono: ["Fira Code", "Courier New", "monospace"],
				cool: ["Comic Sans", "sans-serif"],
				fancy: ["'Dancing Script'", "cursive"],
				display: "Oswald, ui-serif",
			},
			spacing: {
				xxs: "0.25rem",
			},
			fontSize: {
				xxs: "0.625rem",
			},
			width: {
				xxs: "16rem",
			},
			height: {
				xxs: "16rem",
			},
		},
	},
	variants: {
		extend: {
			colors: {
				zinc: colors.gray,
				slate: colors.slate,
			},
			visibility: ["group-hover"],
			display: ["group-hover"],
			translate: ["hover", "group-hover"],
			transitions: ["group-hover", "width", "height", "hover"],
			rotation: ["group-hover", "hover"],
			margin: ["group-hover", "hover"],
			skew: ["group-hover", "hover"],
			padding: ["group-hover", "hover"],
			borderRadius: ["group-hover", "hover"],
			radius: ["hover"],
			text: ["hover", "group-hover"],
			size: ["hover", "group-hover"],
			width: ["hover", "group-hover"],
			height: ["hover", "group-hover"],
			animation: ["hover", "group-hover"],
			display: ["hover", "group-hover"],
		},
	},
	plugins: [],
};
