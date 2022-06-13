import React from "react";
import styles from "../css/Home.module.css";
import Box, { BoxProps } from "@mui/material/Box";
import { Button, Container } from "@mui/material";

function HeroSection() {
	return (
		<Container className="heroSection">
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
					<img className={styles.groupIcon1} alt="" src="group-1.svg" />
					<div className={styles.heroText}>Just Slide to “dash” anyone</div>

					{/* SLIDE TO DASH BUTTON ON THE HERO SECTION */}

					<Box
						sx={{
							display: "flex",
						}}
						className={styles.slideContact}
					>
						<Button
							className={styles.rectangleButton}
							variant="contained"
							color="primary"
						>
							<p className={styles.slideToDash}>
								Slide to dash
								<img alt="" src="vector2.svg" />
							</p>
						</Button>
						<p className={styles.phoneNo}>Enter your phone number</p>
					</Box>

					<Box
						sx={{
							display: "flex",
						}}
						className={styles.platformIcon}
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

					{/* SLIDE TO DASH BUTTON - GOOGLE/APPLE ICONS */}
				</div>
				<img
					className={styles.appImage}
					alt="dash appimage"
					src="slideimage-raw01-3@2x.png"
				/>
			</Box>
		</Container>
	);
}

export default HeroSection;
