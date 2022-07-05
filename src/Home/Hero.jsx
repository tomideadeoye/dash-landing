import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SwipeableButton from "../Components/SwipeableButton";

// STYLES
import styles from "../css/Home.module.css";

const useStyles = makeStyles((theme) => ({
	centerHorizontally: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	platformIcon: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "31.25vw",
		alignItems: "center",
	},
	iconDetailBox: {
		display: "flex",
		flexDirection: "row",
		"& > div": {
			margin: "0 1.4vw",
		},
		"& img": {
			width: "1.5vw",
			margin: "0 1vw 0 0vw",
		},
		"& p": { fontWeight: "light" },
	},
}));

export default function HeroSection() {
	const classes = useStyles();
	return (
		<div className={styles.heroSection}>
			<Box
				sx={{
					display: "flex",
				}}
			>
				<div className={styles.heroSectionTexts}>
					<p className={styles.heroTitle}>pay & be paid</p>
					<p className={styles.heroCash}>
						cash <span className={styles.heroTitle}>with</span>
					</p>
					<img className={styles.heroSectionLogo} alt="" src="group-1.svg" />
					<div className={styles.heroText}>Just Slide to “dash” anyone</div>

					{/* SLIDE TO DASH BUTTON ON THE HERO SECTION */}

					<Box className={classes.platformIcon}>
						<SwipeableButton color="#14243b" text="Enter your phone number" />
						<Box className={classes.iconDetailBox}>
							<Box className={classes.centerHorizontally}>
								<img alt="" src="vector1.svg" />
								<p>App Store</p>
							</Box>
							<Box className={classes.centerHorizontally}>
								<img alt="" src="/vectors/playstore.svg" />
								<p>Google Play</p>
							</Box>
						</Box>
					</Box>

					{/* SLIDE TO DASH BUTTON - GOOGLE/APPLE ICONS */}
				</div>
				<img
					className={styles.appImage}
					alt="dash appimage"
					src="slideimage-raw01-3@2x.png"
				/>
			</Box>
		</div>
	);
}
