import React, { useState } from "react";
import SwipeableButton from "../Components/SwipeableButton";
import styles from "../css/Home.module.css";
import styled from "styled-components";

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

const VideoResponsive = styled.div`
	overflow: hidden;
	padding-bottom: 56.25%;
	position: relative;
	height: 0;

	iframe {
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		position: absolute;
		border-radius: 3.125vw;
	}
`;

export function VideoEmbedComponent({ source }) {
	const [play, setPlay] = useState(false);

	return (
		<>
			<VideoResponsive>
				<iframe
					width="853vw"
					// height="480vw"
					// logic for play button
					src={play ? `${source}?autoplay=1` : source}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Dukka Onboarding Video"
				/>
			</VideoResponsive>

			{!play && (
				<div onClick={() => setPlay(true)} className={styles.onboardingVideo}>
					<img alt="" src="playbutton.svg" />
					Onboarding video
				</div>
			)}
		</>
	);
}
