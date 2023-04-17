module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false,
	theme: {
		extend: {
			textColor: {
				DEFAULT: "#ffffff", // Définit la couleur du texte par défaut en blanc
			},
		},
		colors: {
      'me-white': '#f8fafc',
      'me-black': '#020617',
      'me-red': '#b91c1c',
      'me-background': '#35363a',
      'me-colorprimary': '#883ae1'
		},
	},
	variants: {},
	plugins: [],
}
