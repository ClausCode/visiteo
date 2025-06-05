import { Eye, Pencil } from "lucide-react"
import { Link, href } from "react-router-dom"

import { ProfileButton } from "@/features/dashboard/profile-button.widget"

import { ROUTES } from "@/shared/model/routes"
import { Button } from "@/shared/ui/button"
import { Logo } from "@/shared/ui/logo"

type Props = {
	hasPreview: boolean
	setHasPreview: (hasPreview: boolean) => void
}

export function Header({ hasPreview, setHasPreview }: Props) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<Link to={href(ROUTES.HOME)}>
					<div className="flex items-center space-x-2">
						<Logo />
						<span className="text-xl font-bold text-gray-900">VISITEO</span>
					</div>
				</Link>
				<div className="flex items-center gap-4 space-x-4">
					<ProfileButton />
					<Button onClick={() => setHasPreview(!hasPreview)}>
						{hasPreview ? (
							<>
								<Pencil className="size-4" />
								Редактировать
							</>
						) : (
							<>
								<Eye className="size-4" />
								Предпросмотр
							</>
						)}
					</Button>
				</div>
			</div>
		</header>
	)
}
