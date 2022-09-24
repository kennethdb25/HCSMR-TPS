import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Password, UserAccount } from "../pages/Pages";
import ROUTES from "../routes/routes";
import { NavigationContext } from "../context/context";
import "./App.css";

function App() {
	const pages = [
		{ path: ROUTES.LOGIN, component: Login },
		{ path: ROUTES.FORGOT, component: Password },
		{ path: ROUTES.ADMIN, component: UserAccount },
	];

	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<div className="App">
			<NavigationContext.Provider value={{ mobileOpen, setMobileOpen }}>
				<BrowserRouter>
					<Routes>
						{pages.map(({ path, component: Component }, index) => (
							<Route path={path} key={index} element={<Component />} />
						))}
					</Routes>
				</BrowserRouter>
			</NavigationContext.Provider>
		</div>
	);
}

export default App;
