import React from "react";
import SwipeableButton from "../Components/SwipeableButton";
import VideoEmbedComponent from "../Components/VideoEmbedComponent";
import styles from "../css/Home.module.css";

export default function DashMarketPlace() {
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
					<VideoEmbedComponent source="testvideo.mp4" />
				</div>
			</div>
		</>
	);
}
