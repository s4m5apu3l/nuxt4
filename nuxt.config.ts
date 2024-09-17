// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },

	future: {
		compatibilityVersion: 4,
	},

	app: {
		head: {
			title: "nuxt-4 most",
		},
	},

	runtimeConfig: {
		// The private keys which are only available server-side
		apiSecret: "123",
		// Keys within public are also exposed client-side
		public: {
			apiBase: "/api",
		},
	},

	css: ["@/assets/css/tailwind.css", "@/assets/css/normalize.min.css", "@/assets/css/global.css"],

	// ______start only spa mode slv_________
	ssr: false,
	hooks: {
		"prerender:routes"({ routes }) {
			routes.clear(); // Do not generate any routes (except the defaults)
		},
	},
	router: {
		options: {
			hashMode: true,
		},
	},
	// ________end spa mode_____________

	modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/fonts", "./modules/shadcn", "nuxt-viewport", "@pinia/nuxt"],

	pinia: {
		storesDirs: [".app/stores/**"],
	},
	// for typescript check error vue-tsc off this feature
	// typescript: {
	// 	typeCheck: true,
	// },
});
