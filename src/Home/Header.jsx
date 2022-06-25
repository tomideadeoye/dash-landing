import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import styles from "../css/Home.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

export const navItems = [
	{
		id: "Product",
		link: "/products",
	},
	{
		id: "Careers",
		link: "/products",
	},
	{
		id: "Blog",
		link: "/products",
	},
	{
		id: "Help",
		link: "/Help",
	},
];

export default function Header() {
	const [popUpOpen, setPopUpOpen] = useState({
		Language: false,
		Product: false,
	});
	const onMouseEnter = (e) => {
		let value = e.target.id;
		setPopUpOpen((prevPopUpOpen) => ({ ...prevPopUpOpen, [value]: true }));
	};
	const onMouseLeave = (e) => {
		let value = e.target.id;
		setPopUpOpen((prevPopUpOpen) => ({ ...prevPopUpOpen, [value]: false }));
	};

	return (
		<div className={styles.headerSection}>
			<div className={styles.navBox}>
				{/* LOGO */}
				<Link to="/home">
					<img className={styles.logo} alt="" src="dashlogo.svg" />
				</Link>
				{/* MAPS NAVITEMS FROM navItems */}
				<nav className={styles.navItems}>
					{navItems.map((item) => {
						return (
							<li
								className={styles.navItem}
								id={item.id}
								onMouseEnter={(e) => onMouseEnter(e)}
								onMouseLeave={(e) => onMouseLeave(e)}
							>
								<Link to={item.link}>{item.id} </Link>
							</li>
						);
					})}
				</nav>
				<div className={styles.lineDivider} />

				<LanguageIcon
					className={styles.globeIcon}
					id="Language"
					onMouseEnter={(e) => onMouseEnter(e)}
					onMouseLeave={(e) => onMouseLeave(e)}
				/>
				<Button
					className={styles.button}
					sx={{ width: 152 }}
					variant="outline"
					color="info"
				>
					Download
				</Button>
			</div>
			{popUpOpen.Language && <LanguagePopUp />}
			{popUpOpen.Product && <ProductPopUp />}
		</div>
	);
}

function LanguagePopUp() {
	return (
		<div className={styles.containerCover} style={{ right: "9vw" }}>
			<div className={styles.popUpContainer}>
				<div className={styles.popUpContainerItem}>
					<span>
						<LanguageIcon className={styles.globeIcon2} />
					</span>
					<p>Français</p>
				</div>
				<div className={styles.popUpContainerItem}>
					<span>
						<LanguageIcon className={styles.globeIcon2} />
					</span>
					<p>Español</p>
				</div>
				<div className={styles.popUpContainerItem}>
					<span>
						<LanguageIcon className={styles.globeIcon2} />
					</span>
					<p>Deutsch</p>
				</div>
			</div>
		</div>
	);
}

function ProductPopUp() {
	const content = {
		Dash: {
			"Market Place": {
				name: "Market Place",
				link: "https://dukka.com/",
				icon: "marketplace01-1.svg",
				color: "#F4D893",
			},
			"Receive Money": {
				name: "Receive Money",
				link: "https://dukka.com/",
				icon: "recieve-cash01-1.svg",
				color: "#B56EA4",
			},
			"Send Money": {
				name: "Send Money",
				link: "https://dukka.com/",
				icon: "give-money01-1.svg",
				color: "#EE7E61",
			},
			"Finance Mngt.": {
				name: "Finance Mngt.",
				link: "https://dukka.com/",
				icon: "account-management01-1.svg",
				color: "#755DF5",
			},
		},

		Possibilities: {
			Dukka: {
				name: "Dukka",
				link: "https://dukka.com/",
				icon: "group-56.svg",
				shape: "rectangle",
			},
			"Swipe to Dash": {
				name: "Swipe to Dash",
				link: "https://dukka.com/",
				shape: "rectangle",
				icon: "vector16.svg",
			},
			"Secure Pay": {
				name: "Secure Pay",
				link: "https://dukka.com/",
				shape: "rectangle",
				icon: "vector17.svg",
			},
		},
	};

	return (
		<Box
			sx={{ display: "flex", flexDirection: "row" }}
			className={styles.containerCover}
			style={{ left: "26vw" }}
		>
			{Object.keys(content).map((key, value) => {
				return (
					<Box
						sx={{ display: "flex", flexDirection: "column" }}
						className={styles.popUpContainer}
					>
						<h3 className={styles.popuptitle}>{key}</h3>
						{Object.keys(content[key]).map((_key) => {
							return (
								<div className={styles.popUpContainerItem} key={_key}>
									<img
										className={styles.popupIcon}
										alt=""
										src={content[key][_key].icon}
										style={{
											borderColor: content[key][_key].color,
											borderRadius: content[key][_key].shape ? "20%" : "100%",
										}}
									/>
									<a href={content[key][_key].link}>
										<p>{content[key][_key].name}</p>
									</a>
								</div>
							);
						})}
					</Box>
				);
			})}
		</Box>
	);
}
