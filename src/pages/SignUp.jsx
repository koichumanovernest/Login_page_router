import React, { useContext, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../utils/constants/index";
import { MyContext } from "../context/Context";
const SignUpForm = () => {
	const { setIsAuth } = useContext(MyContext);
	const navigate = useNavigate();

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const newUser = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
		};
		console.log(newUser);
		try {
			const response = await fetch(`${BASE_URL}/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newUser),
			});
			const data = await response.json();
			localStorage.setItem("user", JSON.stringify(data));
			setIsAuth(true);
			return navigate("/");
		} catch (error) {
			console.log(error);
			setIsAuth(false);
		}
	};

	return (
		<FormContainer onSubmit={onSubmitHandler}>
			<FormTitle>Sign Up</FormTitle>
			<FormGroup>
				<Label htmlFor="username">Username:</Label>
				<Input type="text" id="username" name="name" />
			</FormGroup>
			<FormGroup>
				<Label htmlFor="email">Email:</Label>
				<Input type="email" id="email" name="email" />
			</FormGroup>
			<FormGroup>
				<Label htmlFor="password">Password:</Label>
				<Input type="password" id="password" name="password" />
			</FormGroup>
			<SubmitButton type="submit">Sign Up</SubmitButton>
		</FormContainer>
	);
};

export default SignUpForm;

const FormContainer = styled(Form)`
	width: 450px;
	margin: 50px auto;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	background-color: #f9f9f9;
`;

const FormTitle = styled.h2`
	text-align: center;
	margin-bottom: 20px;
`;

const FormGroup = styled.div`
	margin-bottom: 15px;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
`;

const Input = styled.input`
	width: 95%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const SubmitButton = styled.button`
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 5px;
	background-color: #007bff;
	color: white;
	font-size: 16px;
	margin-top: 10px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;
