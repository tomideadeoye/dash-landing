import React from "react";
import SwipeableButton from "../Components/SwipeableButton";
import styles from "../css/Home.module.css";

export default function ReceiveAndManage() {
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
