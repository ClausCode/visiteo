import { Outlet, createBrowserRouter } from "react-router-dom"

import { HeaderWidget } from "@/features/home/header.widget"

import { ROUTES } from "@/shared/model/routes"

import { App } from "./app"
import { ProtectedRoute, protectedLoader } from "./protected-route"
import { Providers } from "./providers"

export const router = createBrowserRouter([
	{
		element: (
			<Providers>
				<App />
			</Providers>
		),
		children: [
			{
				loader: protectedLoader,
				element: (
					<>
						<HeaderWidget />
						<ProtectedRoute />
					</>
				),
				children: [
					{
						path: ROUTES.DASHBOARD,
						lazy: () => import("@/features/dashboard/dashboard.page")
					}
				]
			},
			{
				loader: protectedLoader,
				element: (
					<>
						<ProtectedRoute />
					</>
				),
				children: [
					{
						path: ROUTES.CONSTRUCTOR,
						lazy: () => import("@/features/constructor/constructor.page")
					}
				]
			},
			{
				element: (
					<>
						<HeaderWidget />
						<Outlet />
					</>
				),
				children: [
					{
						path: ROUTES.HOME,
						lazy: () => import("@/features/home/home.page")
					},
					{
						path: ROUTES.LOGIN,
						lazy: () => import("@/features/auth/login.page")
					},
					{
						path: ROUTES.REGISTER,
						lazy: () => import("@/features/auth/register.page")
					},
					{
						path: ROUTES.VIEW,
						lazy: () => import("@/features/constructor/card-view.page")
					}
				]
			}
		]
	}
])
