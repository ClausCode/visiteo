import { authorizedRqClient } from "@/shared/api/instance"
import { queryClient } from "@/shared/api/query-client"
import type { ApiSchemas } from "@/shared/api/schema"

export function useUpdateCard(cardId: string) {
	const mutation = authorizedRqClient.useMutation("patch", "/cards/{cardId}", {
		onSettled: async () => {
			await queryClient.invalidateQueries(
				authorizedRqClient.queryOptions("get", "/cards")
			)
		}
	})

	const updateCard = (data: ApiSchemas["UpdateCardRequest"]) => {
		mutation.mutate({ body: data, params: { path: { cardId } } })
	}

	const errorMessage = mutation.isError ? mutation.error.message : undefined

	return { updateCard, isPending: mutation.isPending, errorMessage }
}
