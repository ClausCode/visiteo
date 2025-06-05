import { CONFIG } from "@/shared/model/config"

export async function enableMocking() {
	if (!CONFIG.MOCK_SERVER) {
		return
	}

	const { worker } = await import("@/shared/api/mocks/browser")
	return worker.start()
}
