import React, { useState } from "react";
import styled from "styled-components";
import styles from "../css/Home.module.css";

// styled components for responsive video

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
export default function VideoEmbedComponent({ source }) {
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
