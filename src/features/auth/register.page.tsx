import { ROUTES } from "@/shared/model/routes"

import { FormWrapper } from "./ui/form-wrapper"
import { RegisterForm } from "./ui/register-form"

function RegisterPage() {
	return (
		<main className="flex grow items-center justify-center bg-blue-50">
			<FormWrapper
				heading="Создание аккаунта"
				description="Введите ваше имя, email и пароль для создания аккаунта"
				backButtonLabel="Уже есть аккаунт? Войдите"
				backButtonHref={ROUTES.LOGIN}
				oauth
			>
				<RegisterForm />
			</FormWrapper>
		</main>
	)
}

export const Component = RegisterPage
