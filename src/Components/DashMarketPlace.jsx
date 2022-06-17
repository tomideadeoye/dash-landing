import React from "react";
import styles from "../css/ProductDetails.module.css";

const content = {
	marketPlace:
		"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
};

export default function DashMarketPlace() {
	return (
		<>
			{" "}
			<div className={styles.sectionBox}>
				<div className={styles.textsBox}>
					<h1 className={styles.sectionTitle}>Dash Market Place</h1>
					<p className={styles.sectionText}>{content.marketPlace}</p>
					<img className={styles.vectorIcon3} alt="" src="vector6.svg" />
				</div>
				<img
					className={styles.sectionImage}
					alt=""
					src="slideimage-raw01-4@2x.png"
				/>
			</div>
			<div className={styles.sendMoney}>
				<div className={styles.sendMoneyBox}>
					<img className={styles.sendMoneyImage} alt="" src="frame-6.svg" />
					<div className={styles.textsBox}>
						<h1>Send money</h1>
						<p>{content.marketPlace}</p>
						<img className={styles.vectorIcon3} alt="" src="vector6.svg" />
					</div>
				</div>
				<div className={styles.SendMoneyVideoBox}>
					<img className={styles.vid01011Icon} alt="" src="vid0101-1@2x.png" />
					<div className={styles.onboardingVideo}>
						<img alt="" src="playbutton.svg" />
						Onboarding video
					</div>
				</div>
			</div>
		</>
	);
}
