import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Separator } from "@/shared/ui/separator"

import { useLogout } from "../model/use-logout"
import { useUpdateProfile } from "../model/use-update-profile"
import { useUser } from "../model/use-user"
import { ProfileButton, ProfileButtonSkeleton } from "../profile-button.widget"
import {
	type SettingsSchema,
	settingsSchema
} from "../schemas/profile-settings.schema"

export function ProfileSettingsForm() {
	const { user, isLoading: isUserLoading } = useUser()
	const { logout, isPending: isLogoutPending } = useLogout()
	const {
		updateProfile,
		isPending: isUpdateProfilePending,
		errorMessage
	} = useUpdateProfile()

	const form = useForm<SettingsSchema>({
		resolver: zodResolver(settingsSchema),
		values: {
			username: user?.username || ""
		}
	})

	const onSubmit = (data: SettingsSchema) => {
		updateProfile(data)
	}

	useEffect(() => {
		if (errorMessage) {
			toast.error(errorMessage)
		}
	}, [errorMessage])

	return (
		<Card className="flex h-[500px] w-full flex-col md:w-[400px]">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-center text-xl font-bold">
					Настройки профиля
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col gap-4">
				<div className="flex justify-center">
					{isUserLoading ? (
						<ProfileButtonSkeleton />
					) : (
						<ProfileButton className="size-20" />
					)}
				</div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex h-full flex-col justify-between gap-2"
					>
						<div className="flex flex-col gap-2 space-y-2">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Имя пользователя</FormLabel>
										<FormControl>
											<Input
												{...field}
												disabled={isUserLoading || isUpdateProfilePending}
												type="text"
												autoComplete="name"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										defaultValue={user?.email}
										disabled={true}
										type="text"
									/>
								</FormControl>
							</FormItem>
						</div>
						<Separator />
						<div>
							<Button
								variant="outline"
								className="w-full"
								disabled={isUserLoading || isUpdateProfilePending}
								type="submit"
							>
								{isUpdateProfilePending ? "Сохранение..." : "Сохранить"}
							</Button>
						</div>
					</form>
				</Form>
				<Button
					disabled={isUserLoading || isLogoutPending}
					onClick={() => logout()}
				>
					{isLogoutPending ? "Выход из системы..." : "Выйти"}
				</Button>
			</CardContent>
		</Card>
	)
}
