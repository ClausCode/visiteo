import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { href } from "@/shared/lib/utils"
import { ROUTES } from "@/shared/model/routes"
import { Button } from "@/shared/ui/button"

export function CTASection() {
	return (
		<section className="bg-gray-50 px-4 py-20">
			<div className="container mx-auto max-w-4xl space-y-8 text-center">
				<h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
					Готовы создать свою первую цифровую визитку?
				</h2>
				<p className="text-xl text-gray-600">
					Присоединяйтесь к тысячам профессионалов, которые уже используют
					VISITEO
				</p>
				<Button
					asChild
					size="lg"
				>
					<Link to={href(ROUTES.DASHBOARD)}>
						Начать бесплатно
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</div>
		</section>
	)
}
