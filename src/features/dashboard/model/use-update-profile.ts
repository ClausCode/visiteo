import { toast } from "sonner"

import { authorizedRqClient } from "@/shared/api/instance"
import type { ApiSchemas } from "@/shared/api/schema"

export function useUpdateProfile() {
	const mutation = authorizedRqClient.useMutation("patch", "/user/current", {
		onSuccess: () => {
			toast.success("Профиль обновлен")
		}
	})

	const updateProfile = (data: ApiSchemas["UpdateUserRequest"]) => {
		mutation.mutate({ body: data })
	}

	const errorMessage = mutation.isError ? mutation.error.message : undefined

	return { updateProfile, isPending: mutation.isPending, errorMessage }
}
