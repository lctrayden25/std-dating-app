"use client";

import { LoginFormData, loginSchema } from "@/schema/LoginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Card,
	CardHeader,
	CardBody,
	Input,
	Button,
	Spacer,
} from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data: LoginFormData) => {
		console.log({ data });
	};
	return (
		<Card className="p-5 max-w-screen-sm mx-auto">
			<CardHeader>Login</CardHeader>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-5">
						<Input
							{...register("email")}
							placeholder="Email"
							isInvalid={!!errors.email}
							isRequired
							isClearable
							errorMessage={errors.email?.message}
						/>
						<Input
							{...register("password")}
							placeholder="Password"
							isInvalid={!!errors.password}
							isRequired
							isClearable
							errorMessage={errors.password?.message}
						/>
					</div>
					<Spacer y={10} />
					<Button type="submit">Submit</Button>
				</form>
			</CardBody>
		</Card>
	);
};

export default LoginForm;
