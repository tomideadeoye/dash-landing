import React from "react";
import styles from "../css/ProductDetails.module.css";

const content = {
	receiveMoney:
		"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,  quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
};

export default function ReceiveAndManage() {
	return (
		<>
			<div className={styles.receiveAndManageMoneyBox}>
				<div className={styles.textsBox}>
					<h1 className={styles.light}>Recieve money</h1>
					<p className={styles.light}>{content.receiveMoney}</p>
					<img alt="" src="vector6.svg" />
				</div>
				<img className={styles.sectionImage} alt="" src="image-2@2x.png" />
			</div>
			<div className={styles.receiveAndManageMoneyBox}>
				<img className={styles.sectionImage} alt="" src="image-3@2x.png" />
				<div className={styles.textsBox}>
					<h1 className={styles.light}>Financial management</h1>
					<p className={styles.light}>{content.receiveMoney}</p>
					<img alt="" src="vector6.svg" />
				</div>
			</div>
		</>
	);
}
