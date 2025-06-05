import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "sonner"

import type { ApiSchemas } from "@/shared/api/schema"
import { href } from "@/shared/lib/utils"
import { ROUTES } from "@/shared/model/routes"
import { Button } from "@/shared/ui/button"
import { CardContent } from "@/shared/ui/card"
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/shared/ui/dialog"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Switch } from "@/shared/ui/switch"

import { useUpdateCard } from "../model/use-update-card"
import {
	type CardSettingsSchema,
	cardSettingsSchema
} from "../schemas/card-settings.schema"

export function CardSettingsForm({ card }: { card: ApiSchemas["Card"] }) {
	const {
		updateCard,
		isPending: isUpdateCardPending,
		errorMessage
	} = useUpdateCard(card.id)

	const form = useForm<CardSettingsSchema>({
		resolver: zodResolver(cardSettingsSchema),
		values: {
			name: card.name || "",
			isPublic: card.isPublic || false
		}
	})

	const onSubmit = (data: CardSettingsSchema) => {
		updateCard(data)
	}

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage)
		}
	}, [errorMessage])

	return (
		<DialogContent className="flex w-[400px] flex-col justify-between">
			<DialogHeader>
				<DialogTitle>Настройки карточки</DialogTitle>
				<DialogDescription>Измените настройки карточки</DialogDescription>
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
											disabled={isUpdateCardPending}
											placeholder={card.name}
											type="text"
											autoComplete="name"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="isPublic"
							render={({ field }) => (
								<FormItem className="flex flex-row items-center justify-between gap-2 rounded-lg border p-3 shadow-sm">
									<div className="space-y-2">
										<FormLabel>Публикация карточки</FormLabel>
										<FormDescription>
											Опубликуйте карточку, чтобы она была доступна всем
										</FormDescription>
									</div>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
											disabled={isUpdateCardPending}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						{card.isPublic && (
							<div className="text-center">
								<FormDescription>
									Карточка доступна по этой ссылке
								</FormDescription>
								<Link
									to={href(ROUTES.VIEW, { cardId: card.id })}
									className="text-sm break-words text-blue-500 hover:underline"
								>
									{`${window.location.origin}${href(ROUTES.VIEW, { cardId: card.id })}`}
								</Link>
							</div>
						)}
						<Button
							disabled={isUpdateCardPending}
							type="submit"
						>
							{isUpdateCardPending ? "Сохранение..." : "Сохранить"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</DialogContent>
	)
}
