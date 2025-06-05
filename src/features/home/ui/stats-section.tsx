export function StatsSection() {
	return (
		<section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20">
			<div className="container mx-auto max-w-4xl">
				<div className="grid gap-8 text-center text-white md:grid-cols-3">
					<div className="space-y-2">
						<div className="text-4xl font-bold">2000+</div>
						<div className="text-blue-100">Активных пользователей</div>
					</div>
					<div className="space-y-2">
						<div className="text-4xl font-bold">15K+</div>
						<div className="text-blue-100">Созданных визиток</div>
					</div>
					<div className="space-y-2">
						<div className="text-4xl font-bold">98%</div>
						<div className="text-blue-100">Довольных клиентов</div>
					</div>
				</div>
			</div>
		</section>
	)
}
