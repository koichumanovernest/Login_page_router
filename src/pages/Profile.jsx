import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../utils/constants";
const Profile = () => {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userInfo = JSON.parse(localStorage.getItem("user"));
				const response = await fetch(`${BASE_URL}/users/${userInfo.data.id}`);
				const data = await response.json();
				setUserData(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);
	return (
		<StyledContainer>
			{userData ? (
				<StyledInnerBox>
					<StyledInfoBox>
						<StyledLabel>Id</StyledLabel>
						<StyledValue>{userData.id}</StyledValue>
					</StyledInfoBox>
					<StyledInfoBox>
						<StyledLabel>Name</StyledLabel>
						<StyledValue>{userData.name}</StyledValue>
					</StyledInfoBox>
					<StyledInfoBox>
						<StyledLabel>Email</StyledLabel>
						<StyledValue>{userData.email}</StyledValue>
					</StyledInfoBox>
				</StyledInnerBox>
			) : (
				<div>Loading ...</div>
			)}
		</StyledContainer>
	);
};

export default Profile;

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: #f0f0f0;
`;

const StyledInnerBox = styled.div`
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	padding: 24px;
	width: 100%;
	max-width: 400px;
`;

const StyledInfoBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
`;

const StyledLabel = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #4d4e51;
	margin: 0;
`;

const StyledValue = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #333;
	margin: 0;
`;
