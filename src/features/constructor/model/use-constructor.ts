import { createContext, useContext } from "react"

import type { ConstructorContextType } from "../types/context.types"

export const ConstructorContext = createContext<ConstructorContextType>({
	items: [],
	selectedItem: null,
	addItem: () => {},
	removeItem: () => {},
	selectItem: () => {},
	editItem: () => {},
	selectedType: null,
	selectType: () => {},
	parent: null,
	setParent: () => {}
})

export const useConstructor = () => {
	const context = useContext(ConstructorContext)
	if (!context) {
		throw new Error("useConstructor must be used within a ConstructorProvider")
	}
	return context
}
