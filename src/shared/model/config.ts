import { z } from "zod"

const configSchema = z.object({
	API_BASE_URL: z.string(),
	GOOGLE_RECAPTCHA_SITE_KEY: z
		.string()
		.min(1, "GOOGLE_RECAPTCHA_SITE_KEY обязателен"),
	IS_DEV: z.boolean(),
	MOCK_SERVER: z.boolean()
})

const rawConfig = {
	API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
	GOOGLE_RECAPTCHA_SITE_KEY: import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY,
	IS_DEV: import.meta.env.PROD ? false : true,
	MOCK_SERVER: import.meta.env.VITE_MOCK_SERVER === "true"
}

export const CONFIG = configSchema.parse(rawConfig)
