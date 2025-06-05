import { Loader2 } from "lucide-react"

import { cn } from "../lib/utils"

export function Spinner({ className }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className="flex items-center justify-center">
			<Loader2 className={cn("h-4 w-4 animate-spin", className)} />
		</div>
	)
}
