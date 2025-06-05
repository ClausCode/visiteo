import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"

import { useCard, useUpdateCard } from "@/features/card"

import { type PathParams, ROUTES } from "@/shared/model/routes"

import { ConstructorContext } from "../model/use-constructor"
import { type ConstructorItem } from "../types/item.types"

export function ConstructorProvider({
	hasPreview,
	children
}: {
	hasPreview: boolean
	children: React.ReactNode
}) {
	const params = useParams<PathParams[typeof ROUTES.CONSTRUCTOR]>()
	const { card } = useCard(params.cardId!)
	const { updateCard } = useUpdateCard(params.cardId!)

	const [items, setItems] = useState<ConstructorItem[]>([])
	const [selected, setSelected] = useState<string | null>(null)
	const [parent, setParent] = useState<string | null>(null)
	const [selectedType, setSelectedType] = useState<string | null>(null)
	const prevItemsRef = useRef<string>(JSON.stringify(items))
	const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
		undefined
	)

	useEffect(() => {
		if (card?.content) {
			setItems(JSON.parse(card.content))
		}
	}, [card?.content])

	useEffect(() => {
		if (hasPreview) return

		const currentItems = JSON.stringify(items)
		if (currentItems === prevItemsRef.current) return

		if (saveTimeoutRef.current) {
			clearTimeout(saveTimeoutRef.current)
		}

		saveTimeoutRef.current = setTimeout(() => {
			const itemsToSave = JSON.stringify(items)
			if (itemsToSave !== prevItemsRef.current) {
				prevItemsRef.current = itemsToSave
				updateCard({ content: itemsToSave, isPublic: false })
			}
		}, 250)

		return () => {
			if (saveTimeoutRef.current) {
				clearTimeout(saveTimeoutRef.current)
			}
		}
	}, [items, updateCard, hasPreview])

	const addItem = (item: ConstructorItem<any>) => {
		setItems((prev) => [...prev, item as ConstructorItem])
	}

	const removeItem = (id: string) => {
		setItems((prev) => prev.filter((item) => item.id !== id))
	}

	const selectItem = (id: string | null) => {
		setSelected(id)
	}

	const editItem = (id: string, data: ConstructorItem["data"]) => {
		setItems((prev) =>
			prev.map((item) => (item.id === id ? { ...item, data } : item))
		)
	}

	const selectType = (type: string | null) => {
		setSelectedType(type)
	}

	const selectParent = (id: string | null) => {
		setParent(id)
	}

	return (
		<ConstructorContext.Provider
			value={{
				items,
				selectedItem: selected,
				addItem,
				removeItem,
				selectItem,
				editItem,
				selectedType,
				selectType,
				parent,
				setParent: selectParent
			}}
		>
			{children}
		</ConstructorContext.Provider>
	)
}
