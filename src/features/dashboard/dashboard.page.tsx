import { CardList } from "../card/card-list.widget"

import { ProfileSettingsForm } from "./ui/profile-settings-form"

function DashboardPage() {
	return (
		<main className="flex grow flex-col items-center justify-center gap-4 bg-blue-50 p-4 md:flex-row">
			<div className="relative">
				<div className="relative z-10 flex gap-4">
					<ProfileSettingsForm />
					<CardList />
				</div>

				<div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 blur-xl" />
				<div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-20 blur-xl" />
			</div>
		</main>
	)
}

export const Component = DashboardPage
