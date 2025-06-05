import "react-router-dom"

export const ROUTES = {
	HOME: "/",
	LOGIN: "/auth/login",
	REGISTER: "/auth/register",
	DASHBOARD: "/dashboard",
	CONSTRUCTOR: "/edit/:cardId",
	VIEW: "/view/:cardId"
} as const

export type PathParams = {
	[ROUTES.CONSTRUCTOR]: {
		cardId: string
	}
	[ROUTES.VIEW]: {
		cardId: string
	}
}

declare module "react-router-dom" {
	interface Register {
		params: PathParams
	}
}
