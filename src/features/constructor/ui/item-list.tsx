import { Settings } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { Separator } from "@/shared/ui/separator"

import { itemManager } from "../config/item.config"
import { useConstructor } from "../model/use-constructor"

export function ItemList() {
	const { selectType } = useConstructor()

	const onDragStart = (
		event: React.DragEvent<HTMLButtonElement>,
		itemType: string
	) => {
		selectType(itemType)
		event.dataTransfer.effectAllowed = "move"
	}

	return (
		<div className="flex flex-col gap-2 border-r bg-white p-4">
			{itemManager.registeredItemTypes.map((item) => (
				<Button
					key={item.id}
					className="size-12 select-none hover:text-purple-600"
					variant="ghost"
					onDragStart={(event) => onDragStart(event, item.id)}
					draggable
				>
					{item.icon ? <item.icon className="size-6" /> : item.id}
				</Button>
			))}
			<Separator />
			<Button
				className="size-12 select-none hover:text-blue-600"
				variant="ghost"
			>
				<Settings className="size-6" />
			</Button>
		</div>
	)
}
