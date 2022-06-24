import { Box } from "@mui/system";
import React from "react";
import styles from "../css/Home.module.css";
import { navItems } from "./Header";

export default function Footer() {
	const icons = [];

	const content = {
		receiveMoney:
			"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,  quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
	};
	console.log("Be Confident; You are the Best");

	return (
		<div className={styles.footerContainer}>
			<div>
				<p>download to</p>
				<img src="" alt="" /> <p> anyone</p>
			</div>

			<div>
				<img src="" alt="" /> <p>Help documents and FAQ’S </p>
			</div>
			<hr />

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<div></div>
				<nav className={styles.footerNav}>
					{navItems.map((item) => {
						return <li id={item.id}>{item.id}</li>;
					})}
				</nav>
			</Box>

			{/* COPYRIGHT SECTION */}
			<div className={styles.copyright}>
				<p>
					© 2022-2023 Dukka, Inc. Dash Technologies US, Inc. NMLS ID: ########
				</p>
				<p> Product availability may vary by market. </p>
			</div>
		</div>
	);
}
