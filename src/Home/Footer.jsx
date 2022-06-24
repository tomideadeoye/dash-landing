import { Box } from "@mui/system";
import React from "react";
import styles from "../css/Home.module.css";
import { navItems } from "./Header";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
	const iconsArray = [
		<LinkedInIcon />,
		<InstagramIcon />,
		<FacebookIcon />,
		<TwitterIcon />,
		<YouTubeIcon />
	];

	const content = {
		receiveMoney: {
			receiveMoney:
				"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,  quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
		},
		appStoreLink: {
			link: "/xxxx",
		},
		googlePlayLink: {
			link: "/sfdfhgjhkjnd",
		},
	};

	const rowBoxStyling = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	};

	const colBoxStyling = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div className={styles.footerContainer}>
			<div className={styles.downloadBox}>
				<Box sx={rowBoxStyling}>
					<p>download to</p>
					<img src="dashlogo.svg" alt="" className={styles.downloadLogo} />
					<p> anyone</p>
				</Box>
				<Box sx={rowBoxStyling}>
					<Link to={content.appStoreLink}>
						<Box sx={colBoxStyling} className={styles.downloadIconBox}>
							<p>download from</p>
							<Box sx={rowBoxStyling} className={styles.storeDetails}>
								<AppleIcon /> <p>App Store</p>
							</Box>
						</Box>
					</Link>
					<Link to={content.googlePlayLink}>
						<Box sx={colBoxStyling} className={styles.downloadIconBox}>
							<p>download from</p>
							<Box sx={rowBoxStyling} className={styles.storeDetails}>
								<ShopIcon /> <p>Play Store</p>
							</Box>
						</Box>
					</Link>
				</Box>
			</div>

			<div className={styles.helpDocuments}>
				<img src="dashlogo.svg" alt="" />
				<p>Help documents and FAQ’S </p>
			</div>

			<hr className={styles.footerLineBreak} />

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}
			>

				{/* SOCIAL ICONS LOGIC */}
				<div className={styles.socialIcons}>
					{iconsArray.map((item) => {
						console.log(item);
						return item;
					})}
				</div>
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
