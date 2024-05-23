import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const BaseLayout = () => {
	return (
		<div>
			<nav>
				<NavLink to={"/signUp"}>NavLink</NavLink>
			</nav>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default BaseLayout;
