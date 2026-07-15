import { createContext, FunctionComponent, PropsWithChildren, useContext } from "react";
import { StoreService } from "./Store.service";

interface IServiceContainer {
	storeService: StoreService;
	// apiService
	// loggingService?
}

export function createServiceContainer(): IServiceContainer {
	const storeService = new StoreService();

	return {
		storeService,
	};
}

const defaultServiceContainer: IServiceContainer = {
	storeService: {} as StoreService,
};

const ServiceContainerContext = createContext<IServiceContainer>(defaultServiceContainer);

interface IServiceContainerProviderProps extends PropsWithChildren {
	serviceContainer: IServiceContainer;
}

export const ServiceContainerProvider: FunctionComponent<IServiceContainerProviderProps> = ({
	serviceContainer,
	children,
}) => {
	return <ServiceContainerContext.Provider value={serviceContainer}>{children}</ServiceContainerContext.Provider>;
};

export function useServiceContainer() {
	return useContext(ServiceContainerContext);
}
