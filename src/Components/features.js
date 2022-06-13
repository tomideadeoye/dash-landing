import { Grid } from "@mui/material";
import React from "react";
import styles from "../css/Home.module.css";
import Container from "@mui/material/Container";

let featureData = {
	Send: {
		featureIcon: "give-money01-1.svg",
		featureTitle: "Send Money",
		content:
			"dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sedquia non numquam.",
	},
	ReceiveMoney: {
		featureIcon: "recieve-cash01-1.svg",
		featureTitle: "Receive Money",
		content:
			"dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sedquia non numquam.",
	},
	MarketPlace: {
		featureIcon: "marketplace01-1.svg",
		featureTitle: "Market Place",
		content:
			"dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed	quia non numquam.",
	},
	FinanceManagement: {
		featureIcon: "account-management01-1.svg",
		featureTitle: "Finance Management",
		content:
			"dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed	quia non numquam.",
	},
};

const Feature = ({ featureContent, featureTitle, featureIcon }) => {
	return (
		<div className={styles.featureBox}>
			<div className={styles.iconBox}>
				<img alt="" src={featureIcon} />
			</div>

			<div className={styles.featureTextBox}>
				<h1>{featureTitle}</h1>
				<p>{featureContent}</p>
			</div>
		</div>
	);
};

function Features() {
	return (
		<Container className="features">
			<p className={styles.featureTitle}>What you get</p>
			<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{/* loop through the featureData object and render a Feature component for each key/value pair  */}
				{Object.keys(featureData).map((key) => {
					return (
						<Grid item xs={6} className="featureBox">
							<Feature
								featureIcon={featureData[key].featureIcon}
								featureTitle={featureData[key].featureTitle}
								featureContent={featureData[key].content}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}

export default Features;
