import React from "react";
import styles from "../css/Home.module.css";
import { Button, Container } from "@mui/material";

function Header() {
	return (
		<Container className={styles.headerSection}>
			<div className={styles.navBox}>
				<img className={styles.logo} alt="" src="group-1.svg" />
				<nav className={styles.navItems}>
					<li className={styles.navItem}>Products </li>
					<li className={styles.navItem}>Careers</li>
					<li className={styles.navItem}>Blog</li>
					<li className={styles.navItem}>Help</li>
				</nav>
				<div className={styles.lineDivider} />
				<img className={styles.icon} alt="globe icon" src="biglobe.svg" />
				<Button
					className={styles.button}
					sx={{ width: 152 }}
					variant="outline"
					color="info"
				>
					Download
				</Button>
			</div>
		</Container>
	);
}

export default Header;
