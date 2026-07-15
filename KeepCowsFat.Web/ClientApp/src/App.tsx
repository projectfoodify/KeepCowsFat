import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

import "./_app.scss";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { createServiceContainer, ServiceContainerProvider } from "./services/ServiceContainer";

export const App: FunctionComponent = () => {
	const serviceContainer = createServiceContainer();

	return (
		<ServiceContainerProvider serviceContainer={serviceContainer}>
			<Header />
			<main>
				<Routes>
					{routes.map(({ pathName, Component }) => (
						<Route key={pathName} path={pathName} element={<Component />} />
					))}
				</Routes>
			</main>
			<Footer />
		</ServiceContainerProvider>
	);
};
