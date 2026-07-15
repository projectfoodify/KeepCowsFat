import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { HorizontalLogo } from "../../assets/icons";

import styles from "./header.module.scss";
import { Text } from "../../UI/Text/Text";

export const Header: FunctionComponent = () => {
	const navbarLinks = [
		{ text: "Home", path: "/" },
		{ text: "Services", path: "/services" },
		{ text: "Plan", path: "/plan" },
		{ text: "Backstory", path: "/backstory" },
		{ text: "Kids", path: "/kids" },
		{ text: "Sources", path: "/sources" },
		{ text: "Contact", path: "/contact" },
	];

	return (
		<header className={styles.header}>
			<Link to="/">
				<HorizontalLogo width={200} height={100} />
			</Link>
			<ul className={styles.navbar}>
				{navbarLinks.map((link, index) => (
					<li key={index}>
						<Link to={link.path} className={styles.navLink}>
							<Text>{link.text}</Text>
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
};
