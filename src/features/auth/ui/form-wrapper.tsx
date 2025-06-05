import { type PropsWithChildren } from "react"
import { Link } from "react-router-dom"

import { Button } from "@/shared/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/shared/ui/card"
import { Logo } from "@/shared/ui/logo"
import { Separator } from "@/shared/ui/separator"

import { OAuthButtons } from "./oauth-buttons"

type Props = {
	heading: string
	description?: string
	backButtonLabel?: string
	backButtonHref?: string
	oauth?: boolean
}

export function FormWrapper({
	children,
	heading,
	description,
	backButtonLabel,
	backButtonHref,
	oauth = false
}: PropsWithChildren<Props>) {
	return (
		<div className="relative">
			<Card className="relative z-10 h-[calc(100vh-68px)] w-screen rounded-none bg-white md:h-auto md:w-[400px] md:rounded-2xl">
				<CardHeader>
					<div className="flex justify-center">
						<Logo className="size-12 text-2xl" />
					</div>
					<CardTitle className="text-center text-xl font-bold">
						{heading}
					</CardTitle>
					{description && (
						<CardDescription className="text-center">
							{description}
						</CardDescription>
					)}
				</CardHeader>
				<CardContent>
					{children}
					{oauth && (
						<>
							<Separator label="или" />
							<OAuthButtons />
						</>
					)}
				</CardContent>
				<CardFooter>
					{backButtonLabel && backButtonHref && (
						<Button
							asChild
							variant="link"
							className="w-full font-normal"
						>
							<Link to={backButtonHref}>{backButtonLabel}</Link>
						</Button>
					)}
				</CardFooter>
			</Card>

			<div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 blur-xl" />
			<div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-20 blur-xl" />
		</div>
	)
}
