import { useParams } from "react-router-dom"

import { useCard } from "@/features/card"

import { type PathParams, ROUTES } from "@/shared/model/routes"
import { Spinner } from "@/shared/ui/spinner"

import { ConstructorProvider } from "./context/constructor.context"
import { CardNotFound } from "./ui/card-not-found"
import { CardView } from "./ui/view"

function CardViewPage() {
	const params = useParams<PathParams[typeof ROUTES.VIEW]>()
	const { card, isLoading, errorMessage } = useCard(params.cardId!, false)

	const hasLoaded = !isLoading && card
	const content = card?.content ? JSON.parse(card.content) : []

	return (
		<main className="relative flex grow items-center justify-center gap-4 p-4">
			{!hasLoaded && !errorMessage && <Spinner className="size-8" />}
			{errorMessage && <CardNotFound />}
			{hasLoaded && (
				<ConstructorProvider hasPreview={true}>
					<div className="relative w-full rotate-3 transform transition-transform duration-300 hover:rotate-0 lg:max-w-1/2">
						<CardView items={content} />

						<div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 blur-xl" />
						<div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-20 blur-xl" />
					</div>
				</ConstructorProvider>
			)}
		</main>
	)
}

export const Component = CardViewPage
