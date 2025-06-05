import { z } from "zod"

export const cardCreateSchema = z.object({
	name: z.string().min(1, "Введите имя карточки")
})

export type CardCreateSchema = z.infer<typeof cardCreateSchema>
