import { formatDistanceToNow } from "date-fns"
import { ru } from "date-fns/locale"
import { CreditCard, Edit3, Eye, Settings, Share2, Trash2 } from "lucide-react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

import type { ApiSchemas } from "@/shared/api/schema"
import { href } from "@/shared/lib/utils"
import { ROUTES } from "@/shared/model/routes"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card, CardContent } from "@/shared/ui/card"
import { Dialog, DialogTrigger } from "@/shared/ui/dialog"

import { useDeleteCard } from "../model/use-delete-card"

import { CardSettingsForm } from "./card-settings-form"

export function CardListItem({ card }: { card: ApiSchemas["Card"] }) {
	const { deleteCard, isPending, errorMessage } = useDeleteCard()

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage)
		}
	}, [errorMessage])

	return (
		<Card className="group my-2 border border-slate-200 bg-gradient-to-r from-white to-slate-50 transition-all duration-200 hover:border-purple-200 hover:shadow-md">
			<CardContent>
				<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-0">
					<div className="flex items-center space-x-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
							<CreditCard className="size-8 rotate-12 text-white" />
						</div>
						<div>
							<h3 className="text-lg font-semibold text-slate-900">
								{card.name}
							</h3>
							<p className="text-sm text-slate-500">
								Создана{" "}
								{formatDistanceToNow(card.createdAt, {
									addSuffix: true,
									locale: ru
								})}
							</p>
							<div className="mt-2 flex items-center gap-2">
								{card.isPublic ? (
									<Badge
										variant="secondary"
										className="bg-green-100 text-green-700 hover:bg-green-200"
									>
										Активна
									</Badge>
								) : (
									<Badge
										variant="secondary"
										className="bg-red-100 text-red-700 hover:bg-red-200"
									>
										Неактивна
									</Badge>
								)}
								<Badge
									variant="outline"
									className="text-slate-600"
								>
									<Eye className="mr-1 h-3 w-3" />0 просмотров
								</Badge>
							</div>
						</div>
					</div>
					<div className="flex items-center space-x-2 opacity-100 transition-opacity group-hover:opacity-100 md:opacity-0">
						<Button
							size="sm"
							variant="ghost"
							className="size-12 p-0 hover:bg-blue-50 hover:text-blue-600 md:size-8"
						>
							<Share2 className="size-6 md:size-4" />
						</Button>
						<Link to={href(ROUTES.CONSTRUCTOR, { cardId: card.id })}>
							<Button
								size="sm"
								variant="ghost"
								className="size-12 p-0 hover:bg-purple-50 hover:text-purple-600 md:size-8"
							>
								<Edit3 className="size-6 md:size-4" />
							</Button>
						</Link>
						<Dialog>
							<DialogTrigger asChild>
								<Button
									size="sm"
									variant="ghost"
									className="size-12 p-0 hover:bg-amber-50 hover:text-amber-600 md:size-8"
								>
									<Settings className="size-6 md:size-4" />
								</Button>
							</DialogTrigger>
							<CardSettingsForm card={card} />
						</Dialog>

						<Button
							size="sm"
							variant="ghost"
							disabled={isPending}
							className="size-12 p-0 hover:bg-red-50 hover:text-red-600 md:size-8"
							onClick={() => deleteCard(card.id)}
						>
							<Trash2 className="size-6 md:size-4" />
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
