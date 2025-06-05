import { Trash2 } from "lucide-react"
import { Fragment } from "react/jsx-runtime"

import { Button } from "@/shared/ui/button"
import { ScrollArea } from "@/shared/ui/scroll-area"

import { itemManager } from "../config/item.config"
import { useConstructor } from "../model/use-constructor"

export function ItemProperties() {
	const { items, selectedItem, removeItem, selectItem } = useConstructor()
	const item = items.find((it) => it.id === selectedItem)

	const handleDelete = (itemId: string) => {
		removeItem(itemId)
		selectItem(null)
	}

	return (
		<div className="flex h-full w-96 flex-col border-l bg-white p-4">
			<span className="text-lg font-bold">Свойства</span>
			<ScrollArea className="h-full">
				{item ? (
					<Fragment key={item.id}>
						{itemManager.findTypeById(item.type)?.propertiesForm(item)}
						<Button
							variant="secondary"
							onClick={() => handleDelete(item.id)}
							className="mt-2 flex w-full items-center gap-2"
						>
							<Trash2 className="size-4" />
							Удалить
						</Button>
					</Fragment>
				) : (
					<p className="text-sm text-gray-500">Элемент не выбран</p>
				)}
			</ScrollArea>
		</div>
	)

	//
}
