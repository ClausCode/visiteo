import { authorizedRqClient, publicRqClient } from "@/shared/api/instance"

export function useCard(cardId: string, auth: boolean = true) {
	let query = publicRqClient.useQuery("get", "/cards/{cardId}", {
		params: {
			path: {
				cardId
			}
		}
	})

	if (auth) {
		query = authorizedRqClient.useQuery("get", "/cards/{cardId}", {
			params: {
				path: {
					cardId
				}
			}
		})
	}

	const errorMessage = query.isError ? query.error.message : undefined

	return { card: query.data, isLoading: query.isLoading, errorMessage }
}
