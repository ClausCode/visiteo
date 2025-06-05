"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { CONFIG } from "@/shared/model/config"
import { Button } from "@/shared/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"

import { useRegister } from "../model/use-register"
import { type RegisterSchema, registerSchema } from "../schemas/register.schema"

export function RegisterForm() {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
	const { register, isPending, errorMessage } = useRegister()

	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
			passwordRepeat: ""
		}
	})

	const onSubmit = (data: RegisterSchema) => {
		if (recaptchaValue || CONFIG.IS_DEV) {
			register({ ...data, captcha: recaptchaValue || "none" })
		}
	}

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage)
		}
	}, [errorMessage])

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="my-2 grid gap-4"
			>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Имя</FormLabel>
							<FormControl>
								<Input
									{...field}
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="email"
									autoComplete="email"
									autoCorrect="off"
									autoCapitalize="none"
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="password"
									autoComplete="password"
									autoCorrect="off"
									autoCapitalize="none"
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="passwordRepeat"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Подтвердите пароль</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="password"
									autoComplete="password"
									autoCorrect="off"
									autoCapitalize="none"
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{!CONFIG.IS_DEV && (
					<div className="flex justify-center">
						<ReCAPTCHA
							sitekey={CONFIG.GOOGLE_RECAPTCHA_SITE_KEY}
							onChange={setRecaptchaValue}
						/>
					</div>
				)}
				<Button
					disabled={(!recaptchaValue && !CONFIG.IS_DEV) || isPending}
					type="submit"
				>
					{isPending ? "Регистрация..." : "Создать аккаунт"}
				</Button>
			</form>
		</Form>
	)
}
