import { type JSX } from "react"

export type ConstructorItem<T = never> = {
	id: string
	type: string
	parent: string | null
	data: T
}

export type RegisteredItemType<T = never> = {
	id: string
	icon?: React.ComponentType<{ className?: string }>
	renderer: (item: ConstructorItem<T>, devMode?: boolean) => JSX.Element
	propertiesForm: (item: ConstructorItem<T>) => JSX.Element
	defaultData: T
}
