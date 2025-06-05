import type { HTMLProps } from "react"

import { cn } from "../lib/utils"

export function Logo({ className, ...props }: HTMLProps<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 select-none",
				className
			)}
			{...props}
		>
			<span className="font-bold text-white">V</span>
		</div>
	)
}
