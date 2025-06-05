import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/shared/ui/button"
import { CardContent } from "@/shared/ui/card"
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/shared/ui/dialog"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"

import { useCreateCard } from "../model/use-create-card"
import {
	type CardCreateSchema,
	cardCreateSchema
} from "../schemas/card-create.schema"

export function CardCreateForm() {
	const {
		createCard,
		isPending: isCreateCardPending,
		errorMessage
	} = useCreateCard()

	const form = useForm<CardCreateSchema>({
		resolver: zodResolver(cardCreateSchema),
		values: {
			name: ""
		}
	})

	const onSubmit = (data: CardCreateSchema) => {
		createCard(data)
	}

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage)
		}
	}, [errorMessage])

	return (
		<DialogContent className="flex w-[400px] flex-col justify-between">
			<DialogHeader>
				<DialogTitle>Создание карточки</DialogTitle>
				<DialogDescription>Создайте новую карточку</DialogDescription>
			</DialogHeader>
			<CardContent className="flex flex-col p-0">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex h-full flex-col justify-between gap-2 space-y-2"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Имя карточки</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={isCreateCardPending}
											placeholder="Название карточки"
											type="text"
											autoComplete="name"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogClose asChild>
							<Button
								disabled={isCreateCardPending}
								type="submit"
							>
								{isCreateCardPending ? "Создание..." : "Создать"}
							</Button>
						</DialogClose>
					</form>
				</Form>
			</CardContent>
		</DialogContent>
	)
}
