import { ChangeEvent, FunctionComponent } from "react";

import styles from "./footer.module.scss";
import { Text } from "../../UI/Text/Text";
import { Language, siteSettingsStore } from "../../stores/SiteSettingsStore";

export const Footer: FunctionComponent = () => {
	const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedLanguage = e.target.value as (typeof Language)[number];
		siteSettingsStore.updateSettings({ language: selectedLanguage });
	};

	return (
		<footer className={styles.footer}>
			<Text>&copy; 2026 Project Foodify. All rights reserved.</Text>
			<div>
				Select a language:
				<select onChange={onSelect}>
					{Language.map(lang => (
						<option key={lang} value={lang}>
							{lang}
						</option>
					))}
				</select>
			</div>
		</footer>
	);
};
