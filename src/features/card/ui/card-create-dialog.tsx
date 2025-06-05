import type { PropsWithChildren } from "react"

import { Dialog, DialogTrigger } from "@/shared/ui/dialog"

import { CardCreateForm } from "./card-create-form"

export function CardCreateDialog({ children }: PropsWithChildren) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<CardCreateForm />
		</Dialog>
	)
}
