import { useEffect, useState } from "react";
import { StoreConstructorType } from "../services/Store.service";
import { useServiceContainer } from "../services/ServiceContainer";

export class StatefulStore<T> {
	private state: T;
	private listeners = new Set<(state: T) => void>();

	constructor(initialState: T) {
		this.state = initialState;
	}

	subscribe(listener: (state: T) => void) {
		this.listeners.add(listener);
		return () => this.listeners.delete(listener);
	}

	get storeState() {
		return this.state;
	}

	setState(data: T) {
		this.state = data;
		this.listeners.forEach(listener => listener(this.state));
	}
}

export function useStore(Store: StoreConstructorType<any>) {
	const { storeService } = useServiceContainer();
	return storeService.getStore(Store);
}

export function useStatefulStore(Store: StoreConstructorType<any>) {
	const store = useStore(Store);
	const [state, setState] = useState(store.storeState);
	+useEffect(() => {
		const unsubscribe = store.subscribe(setState);
		return () => unsubscribe();
	}, [store]);

	return state;
}
