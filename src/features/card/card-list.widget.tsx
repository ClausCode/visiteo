import { Plus } from "lucide-react"
import { useEffect } from "react"
import { toast } from "sonner"

import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import { ScrollArea } from "@/shared/ui/scroll-area"
import { Spinner } from "@/shared/ui/spinner"

import { useCards } from "./model/use-cards"
import { CardCreateDialog } from "./ui/card-create-dialog"
import { CardListItem } from "./ui/card-list-item"

export function CardList() {
	const { cardList, isLoading, errorMessage } = useCards()

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage)
		}
	}, [errorMessage])

	return (
		<Card className="flex h-[500px] w-full flex-col justify-between md:w-[600px]">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-center text-xl font-bold">
					Список карточек
				</CardTitle>
				<CardCreateDialog>
					<Button variant="ghost">
						<Plus className="size-6" />
					</Button>
				</CardCreateDialog>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col gap-4">
				{isLoading ? (
					<Spinner className="size-10" />
				) : (
					<ScrollArea className="h-full">
						{cardList?.map((card) => (
							<CardListItem
								key={card.id}
								card={card}
							/>
						))}
					</ScrollArea>
				)}
			</CardContent>
		</Card>
	)
}
