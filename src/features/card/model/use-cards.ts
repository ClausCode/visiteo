import { authorizedRqClient } from "@/shared/api/instance"

export function useCards() {
	const query = authorizedRqClient.useQuery("get", "/cards")

	const errorMessage = query.isError ? query.error.message : undefined

	return { cardList: query.data, isLoading: query.isLoading, errorMessage }
}
