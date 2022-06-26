import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "../css/Home.module.css";

export default function FeaturesRatings() {
	const content = {
		"Features and Ratings": [
			{
				text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium",
				icon: "nigeria.svg",
				image: "ladyinglass.svg",
				offset: "0vw",
			},
			{
				text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium",
				icon: "Ghana.svg",
				image: "lady.svg",
				offset: "5vw",
			},
			{
				text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium",
				icon: "Ghana.svg",
				image: "blackguy.svg",
				offset: "-1vw",
			},
		],
		whereFeatured: ["today.svg", "times.svg", "cnn.svg", "guardian.svg"],
	};

	return (
		<div className={styles.featuresRatings}>
			<div className={styles.sendMoneyBox}>
				<div className={styles.textsBox}>
					<h1>Features and Rating</h1>
					{/* loop through the featureData object and render a Feature component for each key/value pair  */}
					{content["Features and Ratings"].map((item, key) => {
						return (
							<div
								key={key}
								className={styles.ratingBox}
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
										className={styles.ratingBoxIcon}
									/>
									<img
										src={item.image}
										alt=""
										className={styles.ratingBoxImage}
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
