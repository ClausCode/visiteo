import { ROUTES } from "@/shared/model/routes"

import { FormWrapper } from "./ui/form-wrapper"
import { LoginForm } from "./ui/login-form"

function LoginPage() {
	return (
		<main className="flex grow items-center justify-center bg-blue-50">
			<FormWrapper
				heading="Вход в систему"
				description="Введите ваш email и пароль для авторизации"
				backButtonLabel="Еще нет аккаунта? Зарегистрируйтесь"
				backButtonHref={ROUTES.REGISTER}
				oauth
			>
				<LoginForm />
			</FormWrapper>
		</main>
	)
}

export const Component = LoginPage
