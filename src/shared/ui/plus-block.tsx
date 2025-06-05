import { PlusIcon } from "lucide-react"

export function PlusBlock() {
	return (
		<div className="pointer-events-none flex w-full flex-1 items-center justify-center bg-purple-50">
			<PlusIcon className="size-8 text-purple-400" />
		</div>
	)
}
