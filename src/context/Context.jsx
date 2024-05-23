import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ContextProvaider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(
		localStorage.getItem("isAuth") === "true" || false
	);

	useEffect(() => {
		localStorage.setItem("isAuth", isAuth);
	}, [isAuth]);

	return (
		<MyContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</MyContext.Provider>
	);
};
