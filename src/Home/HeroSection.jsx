import { Box } from "@mui/material";
import SwipeableButton from "../Components/SwipeableButton";

// STYLES
import styles from "../css/Home.module.css";

export default function HeroSection() {
	const onSuccess = () => {
		console.log("Yay! Swipe Success");
	};

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
						cash <p className={styles.heroTitle}>with</p>
					</p>
					<img className={styles.heroSectionLogo} alt="" src="group-1.svg" />
					<div className={styles.heroText}>Just Slide to “dash” anyone</div>

					{/* SLIDE TO DASH BUTTON ON THE HERO SECTION */}

					<Box className={styles.platformIcon}>
						<SwipeableButton
							key="1"
							onSuccess={onSuccess}
							color="#14243b"
							text="Enter your phone number"
						/>

						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<p>
								Google Play
								<img alt="" src="vector.svg" />
							</p>
							<p>
								App Store
								<img alt="" src="vector1.svg" />
							</p>
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
