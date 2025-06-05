import { ArrowRight, Smartphone, Star } from "lucide-react"
import { Link } from "react-router-dom"

import { href } from "@/shared/lib/utils"
import { ROUTES } from "@/shared/model/routes"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card, CardContent } from "@/shared/ui/card"

export function HeroSection() {
	return (
		<section className="bg-blue-50 px-4 py-10 sm:py-20">
			<div className="container mx-auto max-w-6xl">
				<div className="grid items-center gap-6 sm:gap-12 lg:grid-cols-2">
					<div className="space-y-6 sm:space-y-8">
						<div className="space-y-3 sm:space-y-4">
							<Badge
								variant="secondary"
								className="bg-blue-100 text-blue-700 hover:bg-blue-100"
							>
								✨ Новое поколение визитных карточек
							</Badge>
							<h1 className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-6xl">
								Создавайте
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									{" "}
									цифровые{" "}
								</span>
								визитки будущего
							</h1>
							<p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
								Профессиональные визитные карточки с интерактивными элементами,
								аналитикой и мгновенным обменом контактами
							</p>
						</div>

						<div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
							<Button
								asChild
								size="lg"
								className="w-full sm:w-auto"
							>
								<Link to={href(ROUTES.DASHBOARD)}>
									Создать визитку бесплатно
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="w-full sm:w-auto"
							>
								Посмотреть примеры
							</Button>
						</div>

						<div className="flex flex-col items-start space-y-4 pt-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8">
							<div className="flex items-center space-x-2">
								<div className="flex -space-x-2">
									<div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-pink-400 to-red-400"></div>
									<div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-cyan-400"></div>
									<div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-emerald-400"></div>
								</div>
								<span className="text-sm text-gray-600">
									2000+ пользователей
								</span>
							</div>
							<div className="flex items-center space-x-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="h-4 w-4 fill-yellow-400 text-yellow-400"
									/>
								))}
								<span className="ml-2 text-sm text-gray-600">4.9/5</span>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="relative z-10 rotate-3 transform transition-transform duration-300 hover:rotate-0">
							<Card className="overflow-hidden border-0 bg-white py-0 shadow-2xl">
								<CardContent className="p-8">
									<div className="space-y-6">
										<div className="flex items-center space-x-4">
											<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
												<span className="text-xl font-bold text-white">АИ</span>
											</div>
											<div>
												<h3 className="text-lg font-bold text-gray-900">
													Алексей Иванов
												</h3>
												<p className="text-gray-600">Frontend Developer</p>
											</div>
										</div>

										<div className="space-y-3 text-sm">
											<div className="flex items-center space-x-2">
												<Smartphone className="h-4 w-4 text-gray-400" />
												<span>+7 (999) 123-45-67</span>
											</div>
											<div className="flex items-center space-x-2">
												<span className="h-4 w-4 text-gray-400">@</span>
												<span>alexey@example.com</span>
											</div>
											<div className="flex items-center space-x-2">
												<span className="h-4 w-4 text-gray-400">🌐</span>
												<span>alexey-dev.com</span>
											</div>
										</div>

										<div className="flex space-x-2">
											<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
												<span className="text-xs text-blue-600">in</span>
											</div>
											<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
												<span className="text-xs text-gray-600">gh</span>
											</div>
											<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
												<span className="text-xs text-blue-600">tg</span>
											</div>
										</div>

										<Button className="w-full">Сохранить контакт</Button>
									</div>
								</CardContent>
							</Card>
						</div>

						<div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 blur-xl" />
						<div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-20 blur-xl" />
					</div>
				</div>
			</div>
		</section>
	)
}
