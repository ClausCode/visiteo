import { Image } from "lucide-react"

import {
	type ConstructorItem,
	type RegisteredItemType
} from "../../types/item.types"

import { PictureItemRenderer } from "./renderer"
import { type PictureItemData } from "./types"

export const PictureItem: RegisteredItemType<PictureItemData> = {
	id: "picture",
	icon: Image,
	renderer: (item: ConstructorItem<PictureItemData>, devMode?: boolean) => (
		<PictureItemRenderer
			item={item}
			devMode={devMode}
		/>
	),
	propertiesForm: (item: ConstructorItem<PictureItemData>) => (
		<div>{item.id}</div>
	),
	defaultData: { src: "" }
}
