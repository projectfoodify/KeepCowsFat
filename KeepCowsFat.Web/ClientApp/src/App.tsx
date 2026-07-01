import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./common/header/Header";
import { Footer } from "./common/footer/Footer";

export const App: FunctionComponent = () => {
	return (
		<>
			<Header />
			<Routes>
				{routes.map(({ pathName, Component }) => (
					<Route key={pathName} path={pathName} element={<Component />} />
				))}
			</Routes>
			<Footer />
		</>
	);
};
