import React from "react";
import AppRouter from "./router/AppRouter";
import { ContextProvaider } from "./context/Context";

function App() {
	return (
		<ContextProvaider>
			<AppRouter />;
		</ContextProvaider>
	);
}

export default App;
