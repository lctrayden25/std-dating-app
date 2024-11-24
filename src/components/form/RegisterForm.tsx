"use client";

import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Input,
	Button,
	Spacer,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "@/schema/RegisteFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = (data: RegisterFormData) => {
		console.log(data);
	};

	return (
		<Card className="p-5 max-w-screen-sm mx-auto">
			<CardHeader>Register</CardHeader>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-5">
						<Input
							{...register("name")}
							placeholder="Name"
							isInvalid={!!errors.name}
							isRequired
							isClearable
							errorMessage={errors.name?.message}
						/>
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
					<Button type="submit">Register</Button>
				</form>
			</CardBody>
		</Card>
	);
};

export default RegisterForm;
