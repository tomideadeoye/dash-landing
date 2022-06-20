import styles from "./css/Home.module.css";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import SwipeableButton from "./Components/SwipeableButton";
import React, { useState } from "react";
import YoutubeEmbed from "./Components/videoEmbedComponent";
import Features from "./Home/Features";

// All the functions on the home page are below. They can all be exported to intereact with other components in the app

export const Home = () => {
	return (
		<div className={styles.homeFrame}>
			{" "}
			<Header />
			<HeroSection />
			<Features />
			<img className={styles.divider} alt="" src="divider.png" />
			<DashMarketPlace />
			<ReceiveAndManage />
			<img className={styles.divider} alt="" src="divider.png" />
		</div>
	);
};

function Header() {
	return (
		<div className={styles.headerSection}>
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
		</div>
	);
}

function HeroSection() {
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

function DashMarketPlace() {
	const onSuccess = () => {
		console.log("Yay! Swipe Success");
	};
	const content = {
		marketPlace:
			"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
	};
	return (
		<>
			<div className={styles.sectionBox}>
				<div className={styles.textsBox}>
					<h1 className={styles.sectionTitle}>Dash Market Place</h1>
					<p className={styles.sectionText}>{content.marketPlace}</p>
					<div>
						<SwipeableButton
							key="2"
							onSuccess={onSuccess}
							color="#14243b"
							text="Enter your phone number"
						/>
					</div>
				</div>
				<img
					className={styles.sectionImage}
					alt=""
					src="slideimage-raw01-4@2x.png"
				/>
			</div>
			<div className={styles.sendMoney}>
				<div className={styles.sendMoneyBox}>
					<img alt="" src="frame-6.svg" className={styles.sendMoneyImage} />
					<div className={styles.textsBox}>
						<h1>Send money</h1>
						<p>{content.marketPlace}</p>
						<div>
							<SwipeableButton
								key="3"
								onSuccess={onSuccess}
								color="#14243b"
								text="Enter your phone number"
							/>
						</div>
					</div>
				</div>

				<div className={styles.onboardingVideoContainer}>
					<YoutubeEmbed source="https://www.youtube.com/embed/R8VBRCs2jTU" />
				</div>
			</div>
		</>
	);
}

function ReceiveAndManage() {
	const content = {
		receiveMoney:
			"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,  quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
	};

	return (
		<>
			<div className={styles.receiveAndManageMoneyBox}>
				<div className={styles.textsBox}>
					<h1 className={styles.light}>Recieve money</h1>
					<p className={styles.light}>{content.receiveMoney}</p>

					<SwipeableButton
						id="1"
						key="4"
						// onSuccess={}
						color="#14243b"
						text="Enter your phone number"
					/>
				</div>
				<img className={styles.sectionImage} alt="" src="image-2@2x.png" />
			</div>
			<div className={styles.receiveAndManageMoneyBox}>
				<img className={styles.sectionImage} alt="" src="image-3@2x.png" />
				<div className={styles.textsBox}>
					<h1 className={styles.light}>Financial management</h1>
					<p className={styles.light}>{content.receiveMoney}</p>

					<SwipeableButton
						key="5"
						// onSuccess={onSuccess}
						color="#14243b"
						text="Enter your phone number"
					/>
				</div>
			</div>
		</>
	);
}
