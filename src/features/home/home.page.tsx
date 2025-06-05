import { FooterWidget } from "./footer.widget"
import { CTASection } from "./ui/cta-section"
import { FeaturesSection } from "./ui/features-section"
import { HeroSection } from "./ui/hero-section"
import { StatsSection } from "./ui/stats-section"

function HomePage() {
	return (
		<main>
			<HeroSection />
			<FeaturesSection />
			<StatsSection />
			<CTASection />
			<FooterWidget />
		</main>
	)
}

export const Component = HomePage
