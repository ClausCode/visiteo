import { Outlet } from "react-router-dom"

export function App() {
	return (
		<div className="flex min-h-screen max-w-screen flex-col overflow-x-hidden">
			<Outlet />
		</div>
	)
}
