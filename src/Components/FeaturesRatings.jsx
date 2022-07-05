import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import styles from "../css/Home.module.css";

const useStyles = makeStyles((theme) => ({
	textsBox: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		marginTop: "3.125vw",
		width: "60%",

		"& h1": {
			fontSize: "2.5vw",
			fontWeight: "600",
			textAlign: "left",
			color: "#000",
			marginBottom: "1vw",
		},

		"& p": {
			color: "#000",
			fontSize: "1.5625vw",
			lineHeight: "2.5vw",
			fontWeight: "300",
			width: "100%",
		},

		"& div": {
			"&:nth-child(4)": {
				marginLeft: "0vw",
				marginTop: "-3vw",
				backgroundColor: "#fff",
			},
		},
	},

	ratingBox: {
		display: "flex",
		width: "33.3125vw",
		border: "0.02vw solid #755df5",
		boxShadow: "8px 8px 12px 4px rgba(24, 4, 129, 0.13)",
		borderRadius: "1.875vw",
		margin: "1vw 1vw 1vw 4vw",
		padding: "2vw",
		position: "relative",

		"& > p": {
			fontSize: "1.125vw",
			lineHeight: "1.25vw",
			color: "#6C89AA"
		},
	},
	ratingBoxIcon: {
		width: "6.2vw",
	},
	ratingBoxImage: {
		width: "4.5vw",
		position: "relative",
		right: "2vw",
		bottom: "2vw",
	},
}));

export default function FeaturesRatings() {
	const classes = useStyles();
	const content = {
		"Features and Ratings": [
			{
				text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium",
				icon: "/vectors/nigeria.svg",
				image: "ladyinglass.svg",
				offset: "0vw",
			},
			{
				text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium",
				icon: "/vectors/southafrica.svg",

				image: "lady.svg",
				offset: "5vw",
			},
			{
				text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium",
				icon: "/vectors/ghana.svg",
				image: "blackguy.svg",
				offset: "-1vw",
			},
		],
		whereFeatured: ["today.svg", "times.svg", "cnn.svg", "guardian.svg"],
	};

	return (
		<div className={styles.featuresRatings}>
			<div className={styles.sendMoneyBox}>
				<div className={classes.textsBox}>
					<h1>Features and Rating</h1>
					{/* loop through the featureData object and render a Feature component for each key/value pair  */}
					{content["Features and Ratings"].map((item, key) => {
						return (
							<div
								key={key}
								className={classes.ratingBox}
								style={{
									left: item.offset,
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
									}}
								>
									<img
										src={item.icon}
										alt=""
										className={classes.ratingBoxIcon}
									/>
									<img
										src={item.image}
										alt=""
										className={classes.ratingBoxImage}
									/>
								</Box>
								<p>{item.text}</p>
							</div>
						);
					})}
				</div>
				<div className={styles.whereFeaturedContainer}>
					<Grid
						container
						rowSpacing={{ xs: 3, sm: 3, md: 3 }}
						columnSpacing={{ xs: 3, sm: 3, md: 3 }}
					>
						{/* loop through the featureData object and render a Feature component for each key/value pair  */}
						{content["whereFeatured"].map((item, key) => {
							return (
								<Grid
									item
									lg={6}
									md={6}
									sm={6}
									xs={6}
									className={styles.featureBox}
									key={key}
								>
									<div className={styles.whereFeatured}>
										<img src={item} alt={`featured in ${item.slice(0, -3)}`} />
									</div>
								</Grid>
							);
						})}
					</Grid>
				</div>
			</div>
		</div>
	);
}
