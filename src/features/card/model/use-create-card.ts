import { authorizedRqClient } from "@/shared/api/instance"
import { queryClient } from "@/shared/api/query-client"
import type { ApiSchemas } from "@/shared/api/schema"

export function useCreateCard() {
	const mutation = authorizedRqClient.useMutation("post", "/cards", {
		onSettled: async () => {
			await queryClient.invalidateQueries(
				authorizedRqClient.queryOptions("get", "/cards")
			)
		}
	})

	const createCard = (card: ApiSchemas["CreateCardRequest"]) => {
		mutation.mutate({ body: card })
	}

	const errorMessage = mutation.isError ? mutation.error.message : undefined

	return { createCard, isPending: mutation.isPending, errorMessage }
}
