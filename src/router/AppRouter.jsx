import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

const SignUp = lazy(() => import("../pages/SignUp"));
const Profile = lazy(() => import("../pages/Profile"));
const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<PrivateRouter
					fallBackPath="/signUp"
					Component={
						<Suspense fallback={<div>Loading ...</div>}>
							<Profile />
						</Suspense>
					}
				/>
			),
		},
		{
			path: "/signUp",
			element: (
				<Suspense fallback={<div>Loading...</div>}>
					<SignUp /> ,
				</Suspense>
			),
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRouter;
