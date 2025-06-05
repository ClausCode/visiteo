import { Link, href } from "react-router-dom"

import { ProfileButton } from "@/features/dashboard/profile-button.widget"

import { ROUTES } from "@/shared/model/routes"
import { useSession } from "@/shared/model/session"
import { Button } from "@/shared/ui/button"
import { Logo } from "@/shared/ui/logo"

export function HeaderWidget() {
	const { session } = useSession()

	const isAuthenticated = !!session

	return (
		<header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<Link to={href(ROUTES.HOME)}>
					<div className="flex items-center space-x-2">
						<Logo />
						<span className="text-xl font-bold text-gray-900">VISITEO</span>
					</div>
				</Link>
				<div className="flex items-center space-x-4">
					{isAuthenticated ? (
						<>
							<ProfileButton />
						</>
					) : (
						<>
							<Link
								to={href(ROUTES.LOGIN)}
								className="text-gray-600 transition-colors hover:text-gray-900"
							>
								Вход
							</Link>

							<Button asChild>
								<Link to={href(ROUTES.REGISTER)}>Регистрация</Link>
							</Button>
						</>
					)}
				</div>
			</div>
		</header>
	)
}
