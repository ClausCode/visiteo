import { useNavigate } from "react-router-dom"

import { publicRqClient } from "@/shared/api/instance"
import { type ApiSchemas } from "@/shared/api/schema"
import { ROUTES } from "@/shared/model/routes"
import { useSession } from "@/shared/model/session"

export function useLogin() {
	const navigate = useNavigate()
	const session = useSession()

	const mutation = publicRqClient.useMutation("post", "/auth/login", {
		onSuccess: (data) => {
			session.login(data.accessToken)
			navigate(ROUTES.DASHBOARD)
		}
	})

	const login = (data: ApiSchemas["LoginRequest"]) => {
		mutation.mutate({ body: data })
	}

	const errorMessage = mutation.isError ? mutation.error.message : undefined

	return { login, isPending: mutation.isPending, errorMessage }
}
