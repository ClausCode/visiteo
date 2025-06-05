import { authorizedRqClient } from "@/shared/api/instance"
import { queryClient } from "@/shared/api/query-client"

export function useDeleteCard() {
	const mutation = authorizedRqClient.useMutation("delete", "/cards/{cardId}", {
		onSettled: async () => {
			await queryClient.invalidateQueries(
				authorizedRqClient.queryOptions("get", "/cards")
			)
		}
	})

	const deleteCard = (cardId: string) => {
		mutation.mutate({ params: { path: { cardId } } })
	}

	const errorMessage = mutation.isError ? mutation.error.message : undefined

	return { deleteCard, isPending: mutation.isPending, errorMessage }
}
