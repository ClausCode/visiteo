import { ContainerItem } from "../items/container"
import { LabelItem } from "../items/label"
import { PictureItem } from "../items/picture"
import { type RegisteredItemType } from "../types/item.types"

class ItemManager {
	registeredItemTypes: RegisteredItemType<any>[] = [
		ContainerItem,
		PictureItem,
		LabelItem
	]

	findTypeById(id: string) {
		return this.registeredItemTypes.find((item) => item.id === id)
	}
}

export const itemManager = new ItemManager()
