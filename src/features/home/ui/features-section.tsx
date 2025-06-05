import { Palette, Share2, Zap } from "lucide-react"

import { Badge } from "@/shared/ui/badge"
import { Card, CardContent } from "@/shared/ui/card"

export function FeaturesSection() {
	return (
		<section className="bg-white px-4 py-20">
			<div className="container mx-auto max-w-6xl">
				<div className="mb-16 space-y-4 text-center">
					<Badge
						variant="secondary"
						className="bg-purple-100 text-purple-700"
					>
						Возможности
					</Badge>
					<h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
						Всё что нужно для профессиональных визиток
					</h2>
					<p className="mx-auto max-w-2xl text-xl text-gray-600">
						Современные инструменты для создания, настройки и распространения
						ваших цифровых визитных карточек
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					<Card className="border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
						<CardContent className="space-y-4 p-8 text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
								<Palette className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900">
								Drag & Drop редактор
							</h3>
							<p className="text-gray-600">
								Интуитивный редактор с функцией перетаскивания. Создавайте
								уникальные дизайны без навыков программирования
							</p>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
						<CardContent className="space-y-4 p-8 text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
								<Zap className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900">
								Готовые шаблоны
							</h3>
							<p className="text-gray-600">
								Более 50 профессиональных шаблонов для любой сферы деятельности.
								Настраивайте под свой бренд
							</p>
						</CardContent>
					</Card>

					<Card className="border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl">
						<CardContent className="space-y-4 p-8 text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500">
								<Share2 className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900">
								Мгновенный обмен
							</h3>
							<p className="text-gray-600">
								Делитесь визитками через QR-код, ссылку или NFC. Контакты
								сохраняются автоматически в телефонную книгу
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}
