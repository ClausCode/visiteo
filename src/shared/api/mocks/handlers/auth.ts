import { HttpResponse } from "msw"

import { type ApiSchemas } from "../../schema"
import { http } from "../http"
import {
	createRefreshTokenCookie,
	generateTokens,
	verifyToken,
	verifyTokenOrThrow
} from "../session"

const mockUsers: ApiSchemas["User"][] = [
	{
		id: "1",
		email: "admin@gmail.com",
		username: "admin",
		avatar: "https://i.pravatar.cc/150?img=1"
	}
]

const userPasswords = new Map<string, string>()
userPasswords.set("admin@gmail.com", "123456")

export const authHandlers = [
	http.post("/auth/login", async ({ request }) => {
		const body = await request.json()

		const user = mockUsers.find((u) => u.email === body.email)
		const storedPassword = userPasswords.get(body.email)

		if (!user || !storedPassword || storedPassword !== body.password) {
			return HttpResponse.json(
				{
					message: "Неверный email или пароль",
					code: "INVALID_CREDENTIALS"
				},
				{ status: 401 }
			)
		}

		const { accessToken, refreshToken } = await generateTokens({
			userId: user.id,
			email: user.email
		})

		return HttpResponse.json(
			{
				accessToken: accessToken,
				user
			},
			{
				status: 200,
				headers: {
					"Set-Cookie": createRefreshTokenCookie(refreshToken)
				}
			}
		)
	}),

	http.get("/user/current", async (ctx) => {
		const session = await verifyTokenOrThrow(ctx.request)
		const user = mockUsers.find((u) => u.id === session.userId)

		if (!user) {
			return HttpResponse.json(
				{ message: "Пользователь не найден", code: "USER_NOT_FOUND" },
				{ status: 400 }
			)
		}
		return HttpResponse.json(user)
	}),

	http.post("/auth/register", async ({ request }) => {
		const body = await request.json()

		if (mockUsers.some((u) => u.email === body.email)) {
			return HttpResponse.json(
				{
					message: "Пользователь уже существует",
					code: "USER_EXISTS"
				},
				{ status: 400 }
			)
		}

		const newUser: ApiSchemas["User"] = {
			id: String(mockUsers.length + 1),
			email: body.email,
			username: body.username
		}

		const { accessToken, refreshToken } = await generateTokens({
			userId: newUser.id,
			email: newUser.email
		})

		mockUsers.push(newUser)
		userPasswords.set(body.email, body.password)

		return HttpResponse.json(
			{
				accessToken: accessToken,
				user: newUser
			},
			{
				status: 201,
				headers: {
					"Set-Cookie": createRefreshTokenCookie(refreshToken)
				}
			}
		)
	}),
	http.post("/auth/refresh", async ({ cookies }) => {
		const refreshToken = cookies.session

		if (!refreshToken) {
			return HttpResponse.json(
				{
					message: "Refresh token не найден",
					code: "REFRESH_TOKEN_MISSING"
				},
				{ status: 401 }
			)
		}

		try {
			const session = await verifyToken(refreshToken)
			const user = mockUsers.find((u) => u.id === session.userId)

			if (!user) {
				throw new Error("User not found")
			}

			const { accessToken, refreshToken: newRefreshToken } =
				await generateTokens({
					userId: user.id,
					email: user.email
				})

			return HttpResponse.json(
				{
					accessToken,
					user
				},
				{
					status: 200,
					headers: {
						"Set-Cookie": createRefreshTokenCookie(newRefreshToken)
					}
				}
			)
		} catch (error) {
			console.error("Error refreshing token:", error)
			return HttpResponse.json(
				{
					message: "Недействительный refresh token",
					code: "INVALID_REFRESH_TOKEN"
				},
				{ status: 401 }
			)
		}
	}),
	http.post("/auth/logout", async () => {
		return HttpResponse.json(
			{
				message: "Выход выполнен успешно",
				code: "LOGOUT_SUCCESS"
			},
			{
				status: 200,
				headers: {
					"Set-Cookie":
						"session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Strict"
				}
			}
		)
	}),
	http.patch("/user/current", async ({ request }) => {
		const session = await verifyTokenOrThrow(request)
		const user = mockUsers.find((u) => u.id === session.userId)

		if (!user) {
			return HttpResponse.json(
				{ message: "Пользователь не найден", code: "USER_NOT_FOUND" },
				{ status: 400 }
			)
		}

		const body = await request.json()

		if (body.username) {
			user.username = body.username
		}
		if (body.avatar) {
			user.avatar = body.avatar
		}

		return HttpResponse.json(user)
	})
]
