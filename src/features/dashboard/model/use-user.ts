import { authorizedRqClient } from "@/shared/api/instance"

export function useUser() {
	const query = authorizedRqClient.useQuery("get", "/user/current")

	const errorMessage = query.isError ? query.error.message : undefined

	return { user: query.data, isLoading: query.isLoading, errorMessage }
}
