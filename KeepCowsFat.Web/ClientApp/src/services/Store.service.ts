export type StoreConstructorType<T> = (new (initialState: any) => T) & {
	cacheName: string;
};

export class StoreService {
	private _stores: Record<string, any> = {};

	// need initialState here?

	getStore<T>(Store: StoreConstructorType<T>): T {
		const { cacheName } = Store;

		this._stores[cacheName] = this._stores[cacheName] ?? new Store({});
		return this._stores[cacheName];
	}
}
