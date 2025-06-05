export function CardNotFound() {
	return (
		<div className="flex flex-col items-center justify-center p-8 text-center">
			<h2 className="mb-2 text-2xl font-bold text-gray-800">
				Карточка не найдена или не опубликована
			</h2>
			<p className="text-gray-600">
				Извините, запрашиваемая карточка не существует или была удалена.
			</p>
		</div>
	)
}
