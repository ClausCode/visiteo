import { HttpResponse } from "msw"

import { type ApiSchemas } from "../../schema"
import { http } from "../http"
import { verifyTokenOrThrow } from "../session"

const cards: ApiSchemas["Card"][] = [
	{
		id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
		name: "Test Card",
		content: undefined,
		userId: "1",
		isPublic: true,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	}
]

export const cardsHandlers = [
	http.get("/cards", async (ctx) => {
		const session = await verifyTokenOrThrow(ctx.request)

		return HttpResponse.json(
			cards.filter((card) => card.userId === session.userId)
		)
	}),

	http.get("/cards/{cardId}", async ({ params, request }) => {
		let userId: string | undefined
		try {
			const session = await verifyTokenOrThrow(request)
			userId = session.userId
		} catch (error) {
			console.error(error)
		}

		const { cardId } = params
		const card = cards.find((card) => card.id === cardId)

		if (!card) {
			return HttpResponse.json(
				{
					message: "Карточка не найдена или не опубликована",
					code: "NOT_FOUND"
				},
				{ status: 404 }
			)
		}

		if (!card.isPublic && userId !== card.userId) {
			return HttpResponse.json(
				{
					message: "Карточка не найдена или не опубликована",
					code: "NOT_FOUND"
				},
				{ status: 404 }
			)
		}

		return HttpResponse.json(card)
	}),

	http.post("/cards", async ({ request }) => {
		const session = await verifyTokenOrThrow(request)

		const body = await request.json()

		const now = new Date().toISOString()
		const card: ApiSchemas["Card"] = {
			id: crypto.randomUUID(),
			name: body.name,
			content: undefined,
			userId: session.userId,
			isPublic: false,
			createdAt: now,
			updatedAt: now
		}

		cards.push(card)
		return HttpResponse.json(card, { status: 201 })
	}),

	http.patch("/cards/{cardId}", async ({ params, request }) => {
		await verifyTokenOrThrow(request)
		const { cardId } = params
		const card = cards.find((card) => card.id === cardId)

		if (!card) {
			return HttpResponse.json(
				{ message: "Card not found", code: "NOT_FOUND" },
				{ status: 404 }
			)
		}

		const data = (await request.json()) as ApiSchemas["UpdateCardRequest"]
		Object.assign(card, {
			name: data.name || card.name,
			isPublic: data.isPublic === undefined ? card.isPublic : data.isPublic,
			content: data.content || card.content
		})
		card.updatedAt = new Date().toISOString()

		return HttpResponse.json(card)
	}),

	http.delete("/cards/{cardId}", async ({ params, request }) => {
		await verifyTokenOrThrow(request)
		const { cardId } = params
		const index = cards.findIndex((card) => card.id === cardId)

		if (index === -1) {
			return HttpResponse.json(
				{ message: "Card not found", code: "NOT_FOUND" },
				{ status: 404 }
			)
		}

		cards.splice(index, 1)
		return new HttpResponse(null, { status: 204 })
	})
]
