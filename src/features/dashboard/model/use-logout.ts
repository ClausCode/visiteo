import { useNavigate } from "react-router-dom"

import { authorizedRqClient } from "@/shared/api/instance"
import { ROUTES } from "@/shared/model/routes"
import { useSession } from "@/shared/model/session"

export function useLogout() {
	const navigate = useNavigate()
	const session = useSession()

	const mutation = authorizedRqClient.useMutation("post", "/auth/logout", {
		onSuccess: () => {
			session.logout()
			navigate(ROUTES.LOGIN)
		}
	})

	const logout = () => {
		mutation.mutate({})
	}

	const errorMessage = mutation.isError ? mutation.error.message : undefined

	return { logout, isPending: mutation.isPending, errorMessage }
}
