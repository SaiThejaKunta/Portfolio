/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
	'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primarybg: "#7ED9D9",
				secondary: "#E4D091",
				cursor: "#143259",
				intro: "#143259",
				about : "#f5ebe0",
				skillhead : "#D9BF8F",
				skills: '#D9BF8F'
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				opensans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwind-scrollbar'),
		require('tailwind-scrollbar-hide'),
		require("tw-elements/dist/plugin.cjs")
	],
};
