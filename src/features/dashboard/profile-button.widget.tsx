import { LogOutIcon, UserIcon } from "lucide-react"
import type { HTMLProps } from "react"
import { Link } from "react-router-dom"

import { cn, href } from "@/shared/lib/utils"
import { ROUTES } from "@/shared/model/routes"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu"
import { Skeleton } from "@/shared/ui/skeleton"

import { useLogout } from "./model/use-logout"
import { useUser } from "./model/use-user"

export function ProfileButton({
	className,
	...props
}: HTMLProps<HTMLDivElement>) {
	const { user } = useUser()
	const { logout, isPending } = useLogout()

	if (!user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar
					className={cn("size-8", className)}
					{...props}
				>
					<AvatarImage src={user?.avatar} />
					<AvatarFallback className="text-2xl">
						{user.username.slice(0, 1).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40">
				<DropdownMenuItem
					asChild
					disabled={isPending}
				>
					<Link to={href(ROUTES.DASHBOARD)}>
						<UserIcon className="mr-2 size-4" />
						Профиль
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem
					disabled={isPending}
					onClick={() => logout()}
				>
					<LogOutIcon className="mr-2 size-4" />
					Выйти
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function ProfileButtonSkeleton() {
	return <Skeleton className="size-10 rounded-full" />
}
