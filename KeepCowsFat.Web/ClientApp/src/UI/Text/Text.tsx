import { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";

import styles from "./text.module.scss";
import {
    SiteLanguage,
    SiteSettingsStore,
    useSiteSettingsState,
} from "../../stores/SiteSettingsStore";
import { useStatefulStore } from "../../stores/StatefulStore";

interface ITextProps {
    children: ReactNode;
    className?: string;
}

export const Text: FunctionComponent<ITextProps> = ({ children, className }) => {
    const { settings } = useSiteSettingsState();
    // const wait = useStatefulStore(SiteSettingsStore); // dont work yet

    const fontMap: Record<SiteLanguage, string> = {
        English: styles.fontMain,
        Hieroglyphics: styles.fontSecondary,
    };

    return <span className={classNames(className, fontMap[settings.language])}>{children}</span>;
};
