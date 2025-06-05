import React from "react"

import { itemManager } from "../config/item.config"
import type { ConstructorItem } from "../types/item.types"

export function CardView({ items }: { items: ConstructorItem[] }) {
	if (items.length === 0) {
		return (
			<div className="relative z-10 my-8 flex aspect-[192/128] items-center justify-center border bg-white text-xl text-gray-500">
				Здесь пока ничего нет
			</div>
		)
	}

	return (
		<div className="relative z-10 my-8 flex aspect-[192/128] flex-col border bg-white">
			{items
				.filter((it) => it.parent === null)
				.map((item) => (
					<React.Fragment key={item.id}>
						{itemManager.findTypeById(item.type)?.renderer(item, false)}
					</React.Fragment>
				))}
		</div>
	)
}
