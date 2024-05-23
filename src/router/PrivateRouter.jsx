import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../context/Context";

const PrivateRouter = ({ Component, fallBackPath }) => {
	const { isAuth } = useContext(MyContext);
	return !isAuth ? <Navigate to={fallBackPath} /> : Component;
};

export default PrivateRouter;
