import { LetterText } from "lucide-react"

import {
	type ConstructorItem,
	type RegisteredItemType
} from "../../types/item.types"

import { LabelItemPropsForm } from "./props/form"
import { LabelItemRenderer } from "./renderer"
import { type LabelItemData } from "./types"

export const LabelItem: RegisteredItemType<LabelItemData> = {
	id: "label",
	icon: LetterText,
	renderer: (item: ConstructorItem<LabelItemData>, devMode?: boolean) => (
		<LabelItemRenderer
			item={item}
			devMode={devMode}
		/>
	),
	propertiesForm: (item: ConstructorItem<LabelItemData>) => (
		<LabelItemPropsForm item={item} />
	),
	defaultData: {
		text: "",
		bold: false,
		italic: false,
		underline: false,
		fontSize: 12
	}
}
