import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Password } from "../pages/Pages";
import ROUTES from "../routes/routes";
import "./App.css";

function App() {
	const pages = [
		{ path: ROUTES.LOGIN, component: Login },
		{ path: ROUTES.FORGOT, component: Password },
	];

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{pages.map(({ path, component: Component }, index) => (
						<Route path={path} key={index} element={<Component />} />
					))}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
