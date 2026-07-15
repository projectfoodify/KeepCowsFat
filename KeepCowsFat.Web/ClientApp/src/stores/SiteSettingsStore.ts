import { useEffect, useState } from "react";
import { StatefulStore } from "./StatefulStore";

export const Language = ["English", "Hieroglyphics"] as const;
export type SiteLanguage = "English" | "Hieroglyphics";

interface ISiteSettings {
    language: SiteLanguage;
    // colorTheme?
}

interface ISiteSettingsStoreState {
    settings: ISiteSettings;
}

const defaultSettings: ISiteSettings = { language: "English" };

export class SiteSettingsStore extends StatefulStore<ISiteSettingsStoreState> {
    constructor() {
        super({ settings: defaultSettings });
    }

    updateSettings(newSettings: Partial<ISiteSettings>) {
        this.setState({ settings: { ...this.storeState.settings, ...newSettings } });
    }
}

export const siteSettingsStore = new SiteSettingsStore();

export function useSiteSettingsState() {
    const [state, setState] = useState(siteSettingsStore.storeState);

    useEffect(() => {
        siteSettingsStore.subscribe(setState);
    }, []);

    return state;
}
