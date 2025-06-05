import { z } from "zod"

export const cardSettingsSchema = z.object({
	name: z.string().min(1, "Введите имя карточки"),
	isPublic: z.boolean()
})

export type CardSettingsSchema = z.infer<typeof cardSettingsSchema>
