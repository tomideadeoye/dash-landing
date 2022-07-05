import { Box } from "@mui/system";
import React from "react";
import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { footerNav } from "../Components/navRoutes";

const useStyles = makeStyles((theme) => ({
	footerLineBreak: {
		height: "1px",
		width: "100%",
		backgroundColor: "#F4F6FF",
		margin: "2vw 0",
	},

	helpDocuments: {
		marginTop: "-3vw",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		margin: "1vw 0",
		alignItems: "flex-end",

		"& > img": {
			width: "7vw",
		},
	},

	faqBox: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		"& > img": { width: "5vw", marginBottom: "2vw" },
	},

	footerNav: {
		display: "flex",
		flexDirection: "row",

		"& > li": {
			listStyleType: "none",
			fontSize: "1vw",
			margin: "0 2vw",
			cursor: "pointer",

			"&:hover": {
				borderBottom: "1px solid #f1962c",
			},
		},
	},

	socialIcons: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		"& > div": {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			height: "3vw",
			width: "3vw",
			margin: "0 1vw",
			borderRadius: "100%",
			border: "0.1vw solid white",
			padding: "0.5vw",

			"& > img": { width: "100%", height: "100%" },
		},
	},

	storeDetails: {
		"& > p": {
			color: "#14243b",
			margin: "0 0.5vw",
		},

		"& img": {
			width: "1.5vw",
			padding: ".1vw",
		},
	},
}));

export default function Footer() {
	const classes = useStyles();

	const iconsArray = [
		"linkedin.svg",
		"ig.svg",
		"facebook.svg",
		"twitter.svg",
		"youtube.svg",
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
							<p>Download from</p>
							<Box sx={rowBoxStyling} className={classes.storeDetails}>
								<Box component="img" src="/vectors/appstore-dark.svg" />{" "}
								<p>App Store</p>
							</Box>
						</Box>
					</Link>
					<Link to={content.googlePlayLink}>
						<Box sx={colBoxStyling} className={styles.downloadIconBox}>
							<p>Download from</p>
							<Box sx={rowBoxStyling} className={classes.storeDetails}>
								<Box component="img" src="/vectors/playstore-dark.svg" />{" "}
								<p>Play Store</p>
							</Box>
						</Box>
					</Link>
				</Box>
			</div>

			<Box className={classes.helpDocuments}>
				<img src="dashlogo.svg" alt="dash app logo" />
				<Box className={classes.faqBox}>
					<Box component="img" src="/vectors/helpdesk.svg" />
					<p>Help documents and FAQ’S </p>
				</Box>
			</Box>

			{/* LINE BREAK */}
			<Box className={classes.footerLineBreak} />

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				{/* SOCIAL ICONS LOGIC MAPS THROUGH ICON ARRAY */}
				<Box sx={rowBoxStyling}>
					{iconsArray.map((item, key) => {
						return (
							<Link key={key} to="/something" className={classes.socialIcons}>
								<Box>
									<Box component="img" src={`/vectors/${item}`} />
								</Box>
							</Link>
						);
					})}
				</Box>
				<nav className={classes.footerNav}>
					{footerNav.map((item, key) => {
						return (
							<li key={key} id={item.id}>
								{item.id}
							</li>
						);
					})}
				</nav>
			</Box>

			{/* COPYRIGHT SECTION */}
			<Box className={styles.copyright}>
				<p>
					© 2022-2023 Dukka, Inc. <br /> Dash Technologies US, Inc. NMLS ID:
					########
				</p>
				<p> Product availability may vary by market. </p>
			</Box>
		</div>
	);
}
