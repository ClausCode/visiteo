import { z } from "zod"

export const settingsSchema = z.object({
	username: z.string().min(1, "Введите имя пользователя")
})

export type SettingsSchema = z.infer<typeof settingsSchema>
