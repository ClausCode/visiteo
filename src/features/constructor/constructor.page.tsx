import { useEffect, useState } from "react"

import { ConstructorProvider } from "./context/constructor.context"
import { useConstructor } from "./model/use-constructor"
import { Canvas } from "./ui/canvas"
import { Header } from "./ui/header"
import { ItemList } from "./ui/item-list"
import { ItemProperties } from "./ui/item-properties"
import { CardView } from "./ui/view"

function MobileMessage() {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-gray-100 p-4 text-center">
			<p className="text-lg text-gray-600">
				Редактор недоступен на мобильных устройствах. Пожалуйста, используйте
				десктопную версию.
			</p>
		</div>
	)
}

function ConstructorContent() {
	const [hasPreview, setHasPreview] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const { items } = useConstructor()

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768)
		}
		checkMobile()
		window.addEventListener("resize", checkMobile)
		return () => window.removeEventListener("resize", checkMobile)
	}, [])

	if (isMobile) {
		return <MobileMessage />
	}

	return (
		<main className="flex grow flex-col items-center bg-gray-100">
			<Header
				hasPreview={hasPreview}
				setHasPreview={setHasPreview}
			/>
			<div className="flex h-[calc(100vh-69px)] w-full justify-between gap-2">
				<ItemList />
				<div className="w-full max-w-1/2">
					{hasPreview ? <CardView items={items} /> : <Canvas />}
				</div>
				<ItemProperties />
			</div>
		</main>
	)
}

function ConstructorPage() {
	return (
		<ConstructorProvider hasPreview={false}>
			<ConstructorContent />
		</ConstructorProvider>
	)
}

export const Component = ConstructorPage
