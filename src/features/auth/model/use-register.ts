import { useNavigate } from "react-router-dom"

import { publicRqClient } from "@/shared/api/instance"
import { type ApiSchemas } from "@/shared/api/schema"
import { ROUTES } from "@/shared/model/routes"
import { useSession } from "@/shared/model/session"

export function useRegister() {
	const navigate = useNavigate()
	const session = useSession()

	const mutation = publicRqClient.useMutation("post", "/auth/register", {
		onSuccess: (data) => {
			session.login(data.accessToken)
			navigate(ROUTES.DASHBOARD)
		}
	})

	const register = (data: ApiSchemas["RegisterRequest"]) => {
		mutation.mutate({ body: data })
	}

	const errorMessage = mutation.isError ? mutation.error.message : undefined

	return { register, isPending: mutation.isPending, errorMessage }
}
