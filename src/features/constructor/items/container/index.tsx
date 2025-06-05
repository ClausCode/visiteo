import { Group } from "lucide-react"

import {
	type ConstructorItem,
	type RegisteredItemType
} from "../../types/item.types"

import { ContainerItemPropsForm } from "./props/form"
import { ContainerItemRenderer } from "./renderer"
import { type ContainerItemData } from "./types"

export const ContainerItem: RegisteredItemType<ContainerItemData> = {
	id: "container",
	icon: Group,
	renderer: (item: ConstructorItem<ContainerItemData>, devMode?: boolean) => (
		<ContainerItemRenderer
			item={item}
			devMode={devMode}
		/>
	),
	propertiesForm: (item: ConstructorItem<ContainerItemData>) => (
		<ContainerItemPropsForm item={item} />
	),
	defaultData: { direction: "row", padding: 0, gap: 0 }
}
