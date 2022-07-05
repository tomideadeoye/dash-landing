import React, { useRef, useState } from "react";
import SwipeableButton from "../Components/SwipeableButton";
import styles from "../css/Home.module.css";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";

// makestyles
const useStyles = makeStyles((theme) => ({
	sendMoney: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		borderTop: ".8vw solid  #14243b",
	},
}));

export default function DashMarketPlace() {
	const classes = useStyles();
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
			<div className={classes.sendMoney}>
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

	video {
		height: 100%;
		width: 100%;
		position: absolute;
		border-radius: 3.125vw;
	}
`;

export function VideoEmbedComponent({ source }) {
	const [play, setPlay] = useState(false);
	const vidRef = useRef(null);

	const handlePlay = () => {
		vidRef.current.play();
		setPlay(true);
	};

	return (
		<>
			<VideoResponsive>
				<video
					ref={vidRef}
					title="Dukka Onboarding Video"
					src={source}
					type="video/mp4"
					onEnded={() => setPlay(false)}
				/>
			</VideoResponsive>

			{!play && (
				<div onClick={handlePlay} className={styles.onboardingVideo}>
					<img alt="" src="playbutton.svg" />
					Onboarding video
				</div>
			)}
		</>
	);
}
