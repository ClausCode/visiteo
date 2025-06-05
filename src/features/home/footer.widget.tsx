export function FooterWidget() {
	return (
		<footer className="bg-gray-900 px-4 py-12 text-white">
			<div className="container mx-auto max-w-6xl">
				<div className="grid gap-8 md:grid-cols-4">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
								<span className="text-sm font-bold text-white">V</span>
							</div>
							<span className="text-xl font-bold">VISITEO</span>
						</div>
						<p className="text-gray-400">
							Создавайте профессиональные цифровые визитки и развивайте свой
							бизнес
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Продукт</h4>
						<div className="space-y-2 text-gray-400">
							<div>Возможности</div>
							<div>Шаблоны</div>
							<div>Цены</div>
						</div>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Поддержка</h4>
						<div className="space-y-2 text-gray-400">
							<div>Помощь</div>
							<div>Контакты</div>
							<div>FAQ</div>
						</div>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Компания</h4>
						<div className="space-y-2 text-gray-400">
							<div>О нас</div>
							<div>Блог</div>
							<div>Карьера</div>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
					<p>&copy; 2024 VISITEO. Все права защищены.</p>
				</div>
			</div>
		</footer>
	)
}
